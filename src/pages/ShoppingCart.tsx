import React from "react";
import { useCartContext } from "../components/context/CartContext";
import Menu from "../components/Menu";
import ProductCart from "../ShoppingCart/CartProduct";
const ShoppingCart: React.FC = () => {
  const { state } = useCartContext();
  return (
    <>
      <Menu></Menu>
      <ul>
        {state.map((product) => (
          <ProductCart product={product} key={product.id}></ProductCart>
        ))}
      </ul>
    </>
  );
};
export default ShoppingCart;
