import React from "react";
import { CartProduct, TProduct } from "../../types/storeTypes";
import { useCartContext } from "../context/CartContext";
import { ShoppingCart } from "../Icons";
import Stars from "./Stars";
const Product: React.FC<{ product: TProduct }> = ({ product }) => {
  const { state, dispatch } = useCartContext();
  const handleClickProduct = (product: TProduct) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = state.find((p) => p.id === product.id);

    if (existingProduct) {
      // Si el producto existe, incrementar su cantidad
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      const updatedState = state.map((p) =>
        p.id === product.id ? updatedProduct : p
      );
      dispatch({ type: "updateCart", payload: updatedState });
    } else {
      // Si el producto no existe, añadirlo con cantidad 1
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
      dispatch({ type: "addProduct", payload: addProduct });
    }
  };
  return (
    <li key={product.id} style={{ minWidth: "800px" }}>
      <picture>
        <img width={150} src={product.image} alt={product.title} />
      </picture>
      <article>
        <h4>{product.title}</h4>
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
