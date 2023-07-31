import React, { useState, createContext, useEffect } from "react";
import { menuData } from './MenuData.js';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState(menuData);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, inventory, setInventory }}>
      {props.children}
    </CartContext.Provider>
  );
};
