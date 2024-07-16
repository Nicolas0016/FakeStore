import { useEffect, useState } from "react";
import "../../styles/Filters.css";
import { useAppContext } from "../context/AppContext";
import { useFiltersContext } from "../context/ProductsFilterContext";

const Filters = () => {
  const [categorys, setCategorys] = useState<string[]>([]);
  const [categorysSelected, setCategorysSelected] = useState<string[]>([]);
  const { dispatch } = useFiltersContext();
  const stateFilter = useFiltersContext().state;
  const { state } = useAppContext();

  useEffect(() => {
    if (!state) return;
    const uniqueCategories = Array.from(
      new Set<string>(state.map((product) => product.category))
    );
    setCategorys(uniqueCategories);
  }, [state]);

  const applyFilter = (type: "lowerPrice" | "bestRating", checked: boolean) => {
    if (!checked) {
      dispatch({ type: "initialize", payload: stateFilter });
    } else {
      dispatch({
        type,
        payload: { condition: checked, state: [...stateFilter] }, // Clonar el array para evitar mutaciones directas
      });
    }
  };

  const handleSelectCategory = (category: string) => {
    const updatedCategories = categorysSelected.includes(category)
      ? categorysSelected.filter((cat) => cat !== category)
      : [...categorysSelected, category];

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
          <label>
            <span>Ordenar por precio</span>
            <input
              type="checkbox"
              onChange={(e) => {
                applyFilter("lowerPrice", e.target.checked);
              }}
            />
          </label>
        </li>

        <li>
          <label>
            <span>Mejor valorados</span>
            <input
              type="checkbox"
              onChange={(e) => {
                applyFilter("bestRating", e.target.checked);
              }}
            />
          </label>
        </li>

        <li>
          <span>Categoría</span>
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
