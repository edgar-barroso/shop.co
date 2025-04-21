'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

const CART_KEY = 'shop-co-cart';

export interface CartItem {
  id: number;
  variantId: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  quantity: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  const addItem = (product: CartItem) => {
    const existingItem = cart.find(
      item => item.id === product.id && item.variantId === product.variantId
    );

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id && item.variantId === product.variantId
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: product.quantity }];
    }
    setCart(updatedCart);
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, quantity, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
