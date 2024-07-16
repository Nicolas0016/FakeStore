import React from "react";
import { useCartContext } from "../components/context/CartContext";
import Menu from "../components/Menu";
import Bill from "../ShoppingCart/Bill";
import ProductCart from "../ShoppingCart/CartProduct";
import "../styles/Cart.css";
const ShoppingCart: React.FC = () => {
  const { state } = useCartContext();
  return (
    <>
      <Menu></Menu>
      <ul className="products-in-cart">
        {state.map((product) => (
          <ProductCart product={product} key={product.id}></ProductCart>
        ))}
      </ul>
      <Bill></Bill>
    </>
  );
};
export default ShoppingCart;
