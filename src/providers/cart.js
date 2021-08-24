import { createContext, useState } from "react";

export const CartContext = createContext([]);

//criar  o provider

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const newList = cart.filter((itemOnList) => itemOnList.name !== item.name);
    setCart(newList);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
