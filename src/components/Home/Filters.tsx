import { useEffect, useState } from "react";
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
    dispatch({
      type,
      payload: { condition: checked, state: [...stateFilter] },
    });
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
    <nav className="sticky top-[150px] h-fit text-black/70 w-[270px] px-[10px]">
      <ul className="flex flex-col gap-3">
        <li>
          <label className="flex justify-between">
            <span>Ordenar por precio</span>
            <div className="switch1">
              <input
                type="checkbox"
                id="toggle-price"
                onChange={(e) => {
                  applyFilter("lowerPrice", e.target.checked);
                }}
              />
              <label htmlFor="toggle-price"></label>
            </div>
          </label>
        </li>

        <li>
          <label className="flex justify-between">
            <span>Mejor valorados</span>
            <div className="switch2">
              <input
                type="checkbox"
                id="toggle-rating"
                onChange={(e) => {
                  applyFilter("bestRating", e.target.checked);
                }}
              />
              <label htmlFor="toggle-rating"></label>
            </div>
          </label>
        </li>

        <li>
          <span>Categoría</span>
          <ul className="flex flex-col gap-2 ml-4">
            {categorys.map((category, index) => (
              <li
                key={index}
                className={
                  categorysSelected.includes(category) ? "text-black" : ""
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
