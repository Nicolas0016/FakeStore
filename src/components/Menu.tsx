import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
import { ShoppingCart } from "./Icons";
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
  const totalQuantity = () => {
    return productsCart.reduce((total, product) => total + product.quantity, 0);
  };
  return (
    <>
      {showModal && <ModalVender closeModal={closeModal} />}
      <nav className="menu nav-menu">
        <ul className="nav-search">
          <li>
            <Link to="/">
              <img
                src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.59/mercadolibre/logo_large_25years@2x.png"
                alt="Logo"
              />
            </Link>
          </li>
          <li>
            <input type="text" onKeyDown={newFilter} />
          </li>
        </ul>
        <div className="nav-category">
          <ul>
            <li>Ofertas</li>
            <li>Historial</li>
            <li onClick={() => setShowModal(!showModal)}>Vender</li>
          </ul>
          <Link to="/shopping-cart">
            <ShoppingCart />
            <span>{totalQuantity()}</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Menu;
