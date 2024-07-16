import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { listProducts } from "../../services/fakeAPI";
import { ActionProducts, TProduct } from "../../types/storeTypes";
import reducerProducts from "../reducers/reducerProducts";

interface ContextType {
  state: TProduct[];
  dispatch: React.Dispatch<ActionProducts>;
}

const AppContext = createContext<ContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const reducer = reducerProducts;

  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    listProducts().then((products) => {
      dispatch({ type: "initialize", payload: products });
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
