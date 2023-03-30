import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useOpenCart } from '../store/appStore';
import useCart, { CartItemState, useCartTotalPrice } from '../store/cartStore';
import { useCurrentMode } from '../store/themeStore';
import CartItem from '../components/CartItem';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../gql/orders';
import Spinner from '../components/Spinner';
import { OrderCreated } from '../types/Order';

const mapProductsToOrder = (products: CartItemState[]) =>
  products.map(({ product, quantity }) => ({ product: product.id, quantity }));

export default function CartModal() {
  const currentMode = useCurrentMode((state) => state.currentMode);
  const isOpen = useOpenCart((state) => state.isOpen);
  const toggleOpen = useOpenCart((state) => state.toggleOpen);
  const products = useCart((state) => state.products);
  const incrementQuantity = useCart((state) => state.incrementQuantity);
  const decrementQuantity = useCart((state) => state.decrementQuantity);
  const clearCart = useCart((state) => state.clearCart);
  const total = useCartTotalPrice();

  const [mutateFunction, { loading }] = useMutation(CREATE_ORDER, {
    variables: {
      command: {
        products: mapProductsToOrder(products),
        user: 'John Doe',
      },
    },
    onCompleted: (data: { createOrder: OrderCreated }) => {
      // TODO: Replace with toast
      const date = new Date(data.createOrder.createdAt);
      const message = `Order Created Successfully!
      ID: ${data.createOrder.id}
      By: ${data.createOrder.user}
      Create at: ${new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'full',
        timeStyle: 'long',
      }).format(date)}
      `;
      alert(message);
      clearCart();
      toggleOpen();
    },
  });

  function handleOnClearCart() {
    clearCart();
    toggleOpen();
  }

  async function handleOnBuy() {
    await mutateFunction();
  }

  if (loading) return <Spinner />;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={toggleOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className={currentMode === 'Dark' ? 'dark' : ''}>
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg dark:bg-secondary-dark-bg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full min-w-full'>
                  <div className='dark:bg-secondary-dark-bg bg-main-bg px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                        <Dialog.Title
                          as='h3'
                          className='text-base text-center font-semibold leading-6 text-xl dark:text-gray-100 text-gray-900'
                        >
                          Shopping Cart
                        </Dialog.Title>

                        <div className='mt-6'>
                          {products.length === 0 && (
                            <div className='text-gray-800 text-lg dark:text-gray-100 mt-16'>
                              Your cart is empty. Start by adding some products
                              to cart!
                            </div>
                          )}
                          {products.map(({ product, quantity }) => (
                            <CartItem
                              key={product.id}
                              product={product}
                              quantity={quantity}
                              decrementQuantity={decrementQuantity}
                              incrementQuantity={incrementQuantity}
                            />
                          ))}
                          <div className='flex font-bold text-gray-700 dark:text-stone-100 justify-center text-2xl mt-16'>
                            <>Total: {total.toFixed(2)} EUR</>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='dark:bg-secondary-dark-bg bg-main-bg px-4 py-3 flex justify-between sm:px-6'>
                    <button
                      type='button'
                      className='uppercase rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-red-500 sm:mr-3 sm:w-auto'
                      onClick={handleOnClearCart}
                    >
                      Clear cart
                    </button>
                    <button
                      type='button'
                      className='uppercase rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-blue-700 sm:mt-0 sm:w-auto disabled:opacity-50'
                      onClick={handleOnBuy}
                      disabled={products.length === 0 || loading}
                    >
                      Buy
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
