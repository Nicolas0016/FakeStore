import React from "react";
import { useCartContext } from "../components/context/CartContext";
import { CartProduct } from "../types/storeTypes";
const ProductCart: React.FC<{ product: CartProduct }> = ({ product }) => {
  const { dispatch } = useCartContext();
  const removeProduct = (id: number) => {
    dispatch({ type: "removeProduct", payload: id });
  };
  const handleSelectAction = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
    e.preventDefault();
    dispatch({
      type: "modifyQuantity",
      payload: { id: id, quantity: parseInt(e.target.value) },
    });
  };
  const RenderOptions = () => {
    return (
      <>
        <option value={product.quantity}>{product.quantity}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </>
    );
  };
  return (
    <li key={product.id}>
      <article>
        <header>
          <h4>{product.title}</h4>
        </header>
        <div>
          <img src={product.image} alt={product.title} />
          <section>
            <p>{product.title}</p>
            <form>
              <ul>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeProduct(product.id);
                    }}
                  >
                    <span>Eliminar</span>
                  </button>
                </li>
                <li>
                  <button>Guardar</button>
                </li>
                <li>
                  <button>Modificar</button>
                </li>
              </ul>
              <select
                name=""
                id=""
                onChange={(e) => {
                  handleSelectAction(e, product.id);
                }}
              >
                <RenderOptions />
              </select>
            </form>
          </section>
        </div>
      </article>
    </li>
  );
};
export default ProductCart;
