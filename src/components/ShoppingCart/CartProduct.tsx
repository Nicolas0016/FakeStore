import React from "react";
import { CartProduct } from "../../types/storeTypes";
import { useCartContext } from "../context/CartContext";

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
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      dispatch({
        type: "modifyQuantity",
        payload: { id, quantity: newQuantity },
      });
    }
  };

  const RenderOptions = () => {
    const maxQuantity = product.quantity + 1; // Por ejemplo, para ofrecer una opción extra
    const options = [];
    for (let i = 1; i <= maxQuantity; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <li key={product.id} className="bg-white w-[750px] py-2 px-4 rounded-lg">
      <article>
        <div className="flex gap-5">
          <img
            src={product.image}
            className="w-[120px] h-auto"
            alt={product.title}
          />
          <section className="flex flex-col gap-2">
            <span>{product.title}</span>
            <p className="h-12 overflow-hidden text-ellipsis">
              {product.description}
            </p>
            <form>
              <ul className="flex gap-5">
                <li>
                  <button
                    className="hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      removeProduct(product.id);
                    }}
                  >
                    <span>Eliminar</span>
                  </button>
                </li>
                <li>
                  <label className="flex gap-3">
                    <span>Modificar cantidad</span>
                    <select
                      className="bg-transparent"
                      id="select"
                      value={product.quantity}
                      onChange={(e) => handleSelectAction(e, product.id)}
                    >
                      <RenderOptions />
                    </select>
                  </label>
                </li>
              </ul>
            </form>
          </section>
        </div>
      </article>
    </li>
  );
};

export default ProductCart;
