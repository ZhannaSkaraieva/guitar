import React, { useReducer } from "react";
import { createContext } from "react";
import CartReduser from "./CartReduser";

export const CartContext = createContext(null);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(CartReduser, { guitars: [] });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
