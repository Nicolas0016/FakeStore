import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducerFilters from "../../reducers/reducerFilters";
import { ActionFilters, TProduct } from "../../types/storeTypes";
import { useAppContext } from "./AppContext";
interface ContextType {
  state: TProduct[];
  dispatch: React.Dispatch<ActionFilters>;
}
export const FilterContext = createContext<ContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const reducer = reducerFilters;
  const stateInitial = useAppContext().state;
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    dispatch({ type: "initialize", payload: stateInitial });
  }, [stateInitial]);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFiltersContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
