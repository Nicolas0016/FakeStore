import React, { createContext, useEffect, useReducer } from "react";
import reducerHistory from "../../reducers/reducerHistory";
import { HistoryContextType } from "../../types/storeTypes";

export const HistoryContext = createContext<HistoryContextType | null>(null);

const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialCartState = () => {
    const storedCart = localStorage.getItem("productsCart");
    return storedCart ? JSON.parse(storedCart) : [];
  };
  const reducer = reducerHistory;
  const initialCartState = getInitialCartState();
  const [state, dispatch] = useReducer(reducer, initialCartState);
  useEffect(() => {
    localStorage.setItem("productsHistory", JSON.stringify(state));
  }, [state]);
  return (
    <HistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};
export default HistoryProvider;
