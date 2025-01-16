import React, { useState } from "react";
import { useCartContext } from "../components/context/CartContext";
import Menu from "../components/Menu";
import Bill from "../components/ShoppingCart/Bill";
import ProductCart from "../components/ShoppingCart/CartProduct";
import MoldalSelled from "../components/ShoppingCart/ModalSelled";
import NotProdcuts from "../components/ShoppingCart/NotProducts";
const ShoppingCart: React.FC = () => {
  const { state } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  if (state.length === 0)
    return (
      <>
        <NotProdcuts text="No hay productos en en carro" />
      </>
    );

  return (
    <>
      <Menu></Menu>
      <div className="flex xl:justify-around relative p-4">
        <ul className="flex flex-col gap-4">
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
