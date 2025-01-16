import React from "react";
import { useCartContext } from "../context/CartContext";

const Bill: React.FC<{ handleShowModal: () => void }> = ({
  handleShowModal,
}) => {
  const { state, dispatch } = useCartContext();

  const titleProdcut = (text: string, longitudMaxima: number) => {
    if (text.length <= longitudMaxima) {
      return text; // Devuelve el texto completo si es menor o igual a la longitud máxima
    } else {
      return text.substring(0, longitudMaxima) + "..."; // Recorta el texto y añade puntos suspensivos
    }
  };

  const totalPrices = () => {
    let totalPrice = 0;
    state.map((product) => {
      totalPrice += product.price * product.quantity;
    });
    return Math.round(totalPrice * 100) / 100;
  };

  const sellProducts = () => {
    handleShowModal();
    dispatch({ type: "initialize", payload: [] });
  };

  return (
    <div className="sticky top-5 flex flex-col gap-4 bg-white h-fit py-2 px-4 rounded-lg">
      <ul className="flex flex-col gap-2">
        {state.map((product) => (
          <li key={product.id} className="flex justify-between gap-5">
            <span>
              {titleProdcut(product.title, 20)} ({product.quantity})
            </span>
            <strong>$ {product.price * product.quantity}</strong>
          </li>
        ))}
      </ul>
      <footer className="flex flex-col gap-2 border-t-[1px] border-gray pt-1">
        <span className="flex justify-between ">
          Total <strong>$ {totalPrices()}</strong>
        </span>
        <button
          onClick={sellProducts}
          className="bg-lightBlue text-white rounded-lg"
        >
          Comprar
        </button>
      </footer>
    </div>
  );
};

export default Bill;
