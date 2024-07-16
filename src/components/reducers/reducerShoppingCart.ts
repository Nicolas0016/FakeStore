import { ActionShoppingCart, CartProduct } from "../../types/storeTypes";

const reducerProductsCart = (
  state: CartProduct[],
  action: ActionShoppingCart
) => {
  switch (action.type) {
    case "addProduct":
      return [...state, action.payload];
    case "updateCart":
      return action.payload;
    case "removeProduct":
      return state.filter((product) => product.id != action.payload.id);
    case "initialize":
      return state;
    default:
      return state;
  }
};
export default reducerProductsCart;
