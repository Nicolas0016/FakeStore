import { useEffect, useState } from "react";
import "../../styles/Filters.css";
import { useAppContext } from "../context/AppContext";
import { useFiltersContext } from "../context/ProductsFilterContext";

const Filters = () => {
  const [categorys, setCategorys] = useState<string[]>([]);
  const [categorysSelected, setCategorysSelected] = useState<string[]>([]);
  const { dispatch } = useFiltersContext();
  const { state } = useAppContext();
  useEffect(() => {
    if (!state) return;
    const uniqueCategories = new Set<string>();
    state.forEach((product) => {
      uniqueCategories.add(product.category);
    });
    setCategorys([...uniqueCategories]);
  }, [state]);

  const lowerPrice = (condicional: boolean) => {
    condicional
      ? dispatch({ type: "lowerPrice", payload: condicional })
      : dispatch({ type: "initialize", payload: state });
  };
  const bestRated = (condicional: boolean) => {
    condicional
      ? dispatch({ type: "bestRating", payload: condicional })
      : dispatch({ type: "initialize", payload: state });
  };
  const handleSelectCategory = (category: string) => {
    let updatedCategories;
    if (categorysSelected.includes(category)) {
      updatedCategories = categorysSelected.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...categorysSelected, category];
    }
    setCategorysSelected(updatedCategories);
    dispatch({
      type: "category",
      payload: { initState: state, categories: updatedCategories },
    });
  };

  return (
    <nav className="filters-nav">
      <ul>
        <li>
          <label htmlFor="">
            <span>Ordenar por precio</span>
            <input
              type="checkbox"
              onChange={(e) => {
                lowerPrice(e.target.checked);
              }}
            />
          </label>
        </li>

        <li>
          <label htmlFor="">
            <span>Mejor valorados</span>
            <input
              type="checkbox"
              onChange={(e) => {
                bestRated(e.target.checked);
              }}
            />
          </label>
        </li>
        <li>
          <span>Category</span>
          <ul>
            {categorys.map((category, index) => (
              <li
                key={index}
                className={
                  categorysSelected.includes(category) ? "selected" : ""
                }
                onClick={() => handleSelectCategory(category)}
              >
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Filters;
