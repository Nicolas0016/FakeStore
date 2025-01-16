import { useCartContext } from "../components/context/CartContext";
import { type CartProduct, type TProduct } from "../types/storeTypes";
export const useCart = () => {
  const { state: cartState, dispatch: cartDispatch } = useCartContext();

  const addOrUpdateProductInCart = (product: TProduct) => {
    const existingProduct = cartState.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      const updatedState = cartState.map((p) =>
        p.id === product.id ? updatedProduct : p
      );
      cartDispatch({ type: "updateCart", payload: updatedState });
    } else {
      const addProduct: CartProduct = {
        ...product,
        quantity: 1,
      };
      cartDispatch({ type: "addProduct", payload: addProduct });
    }
  };

  return { addOrUpdateProductInCart };
};
