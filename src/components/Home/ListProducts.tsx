import { useFiltersContext } from "../context/ProductsFilterContext";
import Product from "./Product";
const ListProducts = () => {
  const { state } = useFiltersContext();

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
      className="w-full gap-4 px-2"
    >
      {state.length === 0
        ? Array(6)
            .fill(undefined)
            .map((_, index) => (
              <li
                key={index}
                className="w-full h-[534px] rounded-[9px] bg-white animate-flash"
              ></li>
            ))
        : state.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
    </ul>
  );
};

export default ListProducts;
