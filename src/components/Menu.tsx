import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../components/Icons";
import ModalVender from "./ModalVender";
import { useAppContext } from "./context/AppContext";
import { useCartContext } from "./context/CartContext";
import { useFiltersContext } from "./context/ProductsFilterContext";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const productsCart = useCartContext().state;
  const { state } = useAppContext();
  const { dispatch } = useFiltersContext();

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const changeFilter = (newFilter: string) => {
    dispatch({
      type: "searchProducts",
      payload: { initialState: state, searchText: newFilter },
    });
  };

  const newFilter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      changeFilter(e.currentTarget.value);
    }
  };

  const totalQuantity = productsCart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <>
      {showModal && <ModalVender closeModal={closeModal} />}
      <nav
        className=" py-4 px-3 bg-yellow relative flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-8 gap-5"
        style={{ borderRadius: "0 0 9px 9px " }}
      >
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-5 lg:gap-8">
          <li>
            <Link to="/">
              <img
                src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.59/mercadolibre/logo_large_25years@2x.png"
                alt="Logo"
                className=""
              />
            </Link>
          </li>
          <li className="w-full sm:w-s">
            <input
              type="text"
              onKeyDown={newFilter}
              className="rounded-lg text-xl py-1 px-2 focus:outline-none w-full sm:w-auto"
              placeholder="Buscar productos"
            />
          </li>
        </ul>

        {/* Menu Links */}
        <div className="flex justify-center">
          <ul className="flex justify-center gap-6 text-white font-medium text-lg">
            <li>
              <Link to="/history">Historial</Link>
            </li>
            <li
              onClick={() => setShowModal(!showModal)}
              className="cursor-pointer"
            >
              Vender
            </li>
          </ul>
        </div>

        {/* Shopping Cart */}
        <div className="absolute right-[20px] bottom-[10px] text-white lg:relative lg:right-0 lg:bottom-0">
          <Link to="/shopping-cart">
            <div className="relative">
              <ShoppingCart />
              {totalQuantity > 0 && (
                <span className="absolute -top-[12px] -right-[12px] size-6 bg-[#e91515] rounded-full grid place-content-center text-xs text-white">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Menu;
