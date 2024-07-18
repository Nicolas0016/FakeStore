import React, { createContext, useReducer } from "react";
import { HistoryContextType } from "../../types/storeTypes";
import reducerHistory from "../reducers/reducerHistory";

export const HistoryContext = createContext<HistoryContextType | null>(null);

const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const reducer = reducerHistory;
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <HistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};
export default HistoryProvider;
