import "../../styles/ListProducts.css";
import { useFiltersContext } from "../context/ProductsFilterContext";
import NotProdcuts from "../ShoppingCart/NotProducts";
import Product from "./Product";
const ListProducts = () => {
  const { state } = useFiltersContext();
  if (state.length === 0) {
    return (
      <NotProdcuts text="No encontramos el producto que busca"></NotProdcuts>
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
