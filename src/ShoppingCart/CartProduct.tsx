import React from "react";
import { CartProduct } from "../types/storeTypes";
const ProductCart: React.FC<{ product: CartProduct }> = ({ product }) => {
  return (
    <li key={product.id}>
      <article>
        <header>
          <h4>{product.title}</h4>
        </header>
        <div>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <form>
            <ul>
              <li>
                <button>Eliminar</button>
              </li>
              <li>
                <button>Guardar</button>
              </li>
              <li>
                <button>Modificar</button>
              </li>
            </ul>
            <select name="" id="">
              <option value="">{product.quantity}</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </form>
        </div>
      </article>
    </li>
  );
};
export default ProductCart;
