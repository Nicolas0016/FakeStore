import { ActionFilters, TProduct } from "../../types/storeTypes";

const reducerFilters = (
  state: TProduct[],
  action: ActionFilters
): TProduct[] => {
  switch (action.type) {
    case "bestRating":
      return [...action.payload.state].sort(
        (a, b) => b.rating.rate - a.rating.rate // Ordenar de mayor a menor
      );
    case "lowerPrice":
      return [...action.payload.state].sort((a, b) => a.price - b.price);
    case "searchProducts":
      return action.payload.initialState.filter((product) =>
        product.title
          .toLowerCase()
          .includes(action.payload.searchText.toLowerCase())
      );
    case "category":
      if (action.payload.categories.length === 0)
        return action.payload.initState;
      return action.payload.initState.filter((product) =>
        action.payload.categories.includes(product.category)
      );
    case "initialize":
      return action.payload;
    default:
      return state;
  }
};

export default reducerFilters;
