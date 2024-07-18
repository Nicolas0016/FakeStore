import useHistoryContext from "../hooks/useHistoryContext";
export default function ProductsHistory() {
  const { state, dispatch } = useHistoryContext();
  const removeProduct = (productId: number) => {
    dispatch({ type: "removeProduct", payload: productId });
  };
  return (
    <div className="history-container">
      <h2>Tu historial</h2>
      <ul>
        {state.map((product) => (
          <li key={product.id}>
            <header>
              <img height={250} src={product.image} alt={product.title} />
            </header>
            <div>
              <div>
                <h4>{product.title}</h4>
                <span>$ {product.price}</span>
              </div>
              <footer>
                <button onClick={() => removeProduct(product.id)}>
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
