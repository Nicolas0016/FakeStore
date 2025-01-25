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
    const storedProducts = localStorage.getItem("products");
    const products: TProduct[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    if (products.length > 0) {
      dispatch({ type: "initialize", payload: products });
    } else {
      listProducts().then((fetchedProducts) => {
        dispatch({ type: "initialize", payload: fetchedProducts });
        window.localStorage.setItem(
          "products",
          JSON.stringify(fetchedProducts)
        );
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
