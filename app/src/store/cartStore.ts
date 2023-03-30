import { create, useStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ProductType } from '../types/Product';
import { derive } from 'derive-zustand';

export type CartItemState = {
  product: ProductType;
  quantity: number;
};

type CartState = {
  products: CartItemState[];
  addToCart: (item: ProductType) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void;
};

const findItemIndex = (state: CartState, id: string) =>
  state.products.findIndex((item) => item.product.id === id);
const stillInStock = (item: CartItemState) =>
  item.product.stockAvailable > item.quantity;

const useCart = create<CartState>()(
  persist(
    immer((set) => ({
      products: [],

      addToCart: (item) =>
        set((state) => {
          const itemIndex = findItemIndex(state, item.id);

          if (itemIndex < 0) {
            state.products.push({ product: item, quantity: 1 });
          } else {
            stillInStock(state.products[itemIndex]) &&
              state.products[itemIndex].quantity++;
          }
        }),

      incrementQuantity: (id) =>
        set((state) => {
          const itemIndex = findItemIndex(state, id);
          const cartItem = state.products[itemIndex];

          if (stillInStock(cartItem)) {
            cartItem.quantity++;
          }
        }),

      decrementQuantity: (id) =>
        set((state) => {
          const itemIndex = findItemIndex(state, id);
          const cartItem = state.products[itemIndex];

          if (cartItem.quantity === 1) {
            state.products.splice(itemIndex, 1);
          } else {
            cartItem.quantity--;
          }
        }),

      clearCart: () => set({ products: [] }),
    })),
    {
      name: 'cart',
    }
  )
);

const cartTotalPriceStore = derive<number>((get) =>
  get(useCart).products.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )
);
export const useCartTotalPrice = () => useStore(cartTotalPriceStore);
const cartTotalItemsStore = derive<number>((get) =>
  get(useCart).products.reduce((total, item) => total + item.quantity, 0)
);
export const useCartTotalItems = () => useStore(cartTotalItemsStore);

export default useCart;
