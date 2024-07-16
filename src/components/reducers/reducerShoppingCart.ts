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
      return state.filter((product) => product.id != action.payload);
    case "initialize":
      return state;
    case "modifyQuantity":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product
      );
    default:
      return state;
  }
};
export default reducerProductsCart;
