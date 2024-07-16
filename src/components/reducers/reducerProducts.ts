import { ActionProducts, Product } from "../../types/storeTypes";
const reducerProducts = (
  state: Product[],
  action: ActionProducts
): Product[] => {
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
