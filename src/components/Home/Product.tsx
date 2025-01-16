import { Link } from "react-router-dom";
import useHistoryContext from "../../hooks/useHistoryContext";
import { CartProduct, TProduct } from "../../types/storeTypes";
import { useCartContext } from "../context/CartContext";
import Stars from "./Stars";
interface Props {
  product: TProduct;
}

const Product = ({ product }: Props) => {
  const { state: historyState, dispatch: historyDispatch } =
    useHistoryContext();
  const { state: cartState, dispatch: cartDispatch } = useCartContext();

  const addProductToHistory = (product: TProduct) => {
    if (historyState.find((p) => p.id === product.id)) return;
    historyDispatch({ type: "addProduct", payload: product });
  };
  function handleClickProduct(product: TProduct) {
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

    localStorage.setItem("productsCart", JSON.stringify(cartState));
  }

  return (
    <li
      key={product.id}
      className="w-full h-[534px] rounded-[9px] bg-white relative"
    >
      <picture className="flex justify-center p-1  border-t-gray">
        <img
          className="h-[284px] w-auto"
          src={product.image}
          alt={product.title}
        />
      </picture>
      <article className="p-4">
        <Link
          onClick={() => addProductToHistory(product)}
          to={`/product/${product.id}`}
        >
          <h4 className="h-[48px] overflow-hidden text-ellipsis">
            {product.title}
          </h4>
        </Link>
        <small>
          <del className="text-gray-700 text-sm">
            $ {Math.round((product.price + product.price * 0.2) * 100) / 100}
          </del>
        </small>
        <p className="text-lg font-medium">
          ${product.price}{" "}
          <span className="text-green text-base font-light">20% OFF</span>
        </p>
        <footer className="flex flex-col justify-center gap-4 bottom-0">
          <div className="flex items-center gap-2">
            <span>{product.rating.rate}</span>
            <Stars quantityStars={product.rating.rate}></Stars>
            <span>({product.rating.count})</span>
          </div>
          <button
            title="Add product to cart"
            className="py-1 h-full bg-lightBlue text-white rounded-[12px]"
            onClick={() => handleClickProduct(product)}
          >
            Añadir producto al carrito
          </button>
        </footer>
      </article>
    </li>
  );
};
export default Product;
