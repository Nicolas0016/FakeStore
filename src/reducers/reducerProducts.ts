import { ActionProducts, TProduct } from "../types/storeTypes";
const reducerProducts = (
  state: TProduct[],
  action: ActionProducts
): TProduct[] => {
  switch (action.type) {
    case "initialize":
      return action.payload;
    case "addProduct":
      return [...state, action.payload];
    case "removeProduct":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};
export default reducerProducts;
