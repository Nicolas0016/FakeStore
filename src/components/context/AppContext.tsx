import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducerProducts from "../../reducers/reducerProducts";
import { listProducts } from "../../services/fakeAPI";
import { ActionProducts, TProduct } from "../../types/storeTypes";

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
    const products: TProduct[] = JSON.parse(localStorage.getItem("products"));
    if (products) dispatch({ type: "initialize", payload: products });
    else {
      listProducts().then((products) => {
        dispatch({ type: "initialize", payload: products });
        window.localStorage.setItem("products", JSON.stringify(products));
      });
    }
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
