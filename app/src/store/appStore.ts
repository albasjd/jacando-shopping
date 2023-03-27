import { create } from "zustand";

// sidebar menu active state
type ActiveMenuState = {
  activeMenu: boolean;
  setActiveMenu: (value: boolean) => void;
};
const useActiveMenu = create<ActiveMenuState>((set, get) => ({
  activeMenu: true,
  setActiveMenu: (value) => set({ activeMenu: value }),
}));

// cart modal state
type CartModalState = {
  isOpen: boolean;
  toggleOpen: () => void;
};
const useOpenCart = create<CartModalState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useActiveMenu, useOpenCart };
