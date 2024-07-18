import React, { useState } from "react";
import { useCartContext } from "../components/context/CartContext";
import Menu from "../components/Menu";
import Bill from "../components/ShoppingCart/Bill";
import ProductCart from "../components/ShoppingCart/CartProduct";
import MoldalSelled from "../components/ShoppingCart/ModalSelled";
import NotProdcuts from "../components/ShoppingCart/NotProducts";
import "../styles/Cart.css";

const ShoppingCart: React.FC = () => {
  const { state } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  console.log("Modal status:", showModal); // Agrega un log para verificar el estado del modal

  if (state.length === 0)
    return (
      <>
        <Menu />
        <NotProdcuts text="No hay productos en en carro" />
      </>
    );

  return (
    <>
      <Menu />
      <div className="products">
        <ul className="products-in-cart">
          {state.map((product) => (
            <ProductCart product={product} key={product.id} />
          ))}
        </ul>
        <Bill handleShowModal={handleShowModal} />
        {showModal && <MoldalSelled handleShowModal={handleShowModal} />}
      </div>
    </>
  );
};

export default ShoppingCart;
