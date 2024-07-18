import React from "react";
import { Link } from "react-router-dom";
import { CartProduct, TProduct } from "../../types/storeTypes";
import { useCartContext } from "../context/CartContext";
import useHistoryContext from "../hooks/useHistoryContext";
import { ShoppingCart } from "../Icons";
import Stars from "./Stars";

const Product: React.FC<{ product: TProduct }> = ({ product }) => {
  const { state: cartState, dispatch: cartDispatch } = useCartContext();
  const { state: historyState, dispatch: historyDispatch } =
    useHistoryContext();

  const handleClickProduct = (product: TProduct) => {
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
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        category: product.category,
        price: product.price,
        rating: product.rating,
        quantity: 1,
      };
      cartDispatch({ type: "addProduct", payload: addProduct });
    }
  };

  const addProductToHistory = (product: TProduct) => {
    if (historyState.find((p) => p.id === product.id)) return;
    historyDispatch({ type: "addProduct", payload: product });
  };

  return (
    <li key={product.id} style={{ minWidth: "800px" }}>
      <picture>
        <img width={150} src={product.image} alt={product.title} />
      </picture>
      <article>
        <Link
          onClick={() => addProductToHistory(product)}
          to={`/${product.id}`}
        >
          <h4>{product.title}</h4>
        </Link>
        <small>
          <del>
            $ {Math.round((product.price + product.price * 0.2) * 100) / 100}
          </del>
        </small>
        <p>
          ${product.price} <span>20% OFF</span>
        </p>
        <footer>
          <div>
            <span>{product.rating.rate}</span>
            <Stars quantityStars={product.rating.rate}></Stars>
            <span>({product.rating.count})</span>
          </div>
          <button
            title="Add product to cart"
            className="button-shopping-cart"
            onClick={() => handleClickProduct(product)}
          >
            <ShoppingCart></ShoppingCart>
          </button>
        </footer>
      </article>
    </li>
  );
};

export default Product;
