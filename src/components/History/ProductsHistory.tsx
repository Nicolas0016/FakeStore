import useHistoryContext from "../../hooks/useHistoryContext";
export default function ProductsHistory() {
  const { state, dispatch } = useHistoryContext();
  const removeProduct = (productId: number) => {
    dispatch({ type: "removeProduct", payload: productId });
  };
  return (
    <div className="px-7 py-4">
      <h2 className="text-2xl py-4">Tu historial</h2>
      <ul className="flex items-center gap-2 flex-wrap">
        {state.map((product) => (
          <li
            key={product.id}
            className="w-[210px] h-[450px] bg-white rounded-lg flex flex-col gap-4"
          >
            <header className="p-2 border-b-[2px] border-gray/50">
              <img
                className="max-w-[200px] h-[250px] m-auto"
                src={product.image}
                alt={product.title}
              />
            </header>
            <div className="flex flex-col gap-2 px-2">
              <header className="h-[48px] overflow-hidden text-ellipsis">
                <h4>{product.title}</h4>
              </header>
              <span>$ {product.price}</span>
              <footer>
                <button
                  className="text-lightBlue"
                  onClick={() => removeProduct(product.id)}
                >
                  Eliminar
                </button>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
