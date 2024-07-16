import "../../styles/ListProducts.css";
import { useFiltersContext } from "../context/ProductsFilterContext";
import { NotFound } from "../Icons"; // Asegúrate de importar el componente NotFound
import Product from "./Product";

const ListProducts = () => {
  const { state } = useFiltersContext();
  if (state.length === 0) {
    return (
      <div className="listProducts noProducts">
        <NotFound />
        No encontramos el dispositivo que busca
      </div>
    );
  }

  return (
    <ul className="listProducts">
      {state.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </ul>
  );
};

export default ListProducts;
