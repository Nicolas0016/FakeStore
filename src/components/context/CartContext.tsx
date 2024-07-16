import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { ActionShoppingCart, CartProduct } from "../../types/storeTypes";
import reducerProductsCart from "../reducers/reducerShoppingCart";
interface ContextType {
  state: CartProduct[];
  dispatch: React.Dispatch<ActionShoppingCart>;
}

const CartContext = createContext<ContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const cartReducer = reducerProductsCart;
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
