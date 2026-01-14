import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  memberSince: string;
}

interface Product {
  id: string;
  name: string;
  os?: string;
  specs: {
    cpu: number;
    ram: number;
    storage: number;
    bandwidth?: string;
    ip?: string;
  };
  price: number;
  category?: string;
  popular?: boolean;
  features?: string[];
}

interface CartItem {
  productId: string;
  quantity: number;
}

interface Store {
  user: User | null;
  products: Product[];
  cart: CartItem[];
  setUser: (user: User | null) => void;
  addProduct: (product: Product) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      products: [],
      cart: [],
      setUser: (user) => set({ user }),
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      addToCart: (productId) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.productId === productId);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.productId === productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { productId, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.productId !== productId),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'bitla-storage',
    }
  )
);