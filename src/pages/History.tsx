import ProductsHistory from "../components/History/ProductsHistory";
import Menu from "../components/Menu";
import NotProdcuts from "../components/ShoppingCart/NotProducts";
import useHistoryContext from "../hooks/useHistoryContext";

const History = () => {
  const { state } = useHistoryContext();
  return (
    <>
      <Menu />
      {state.length === 0 ? (
        <NotProdcuts text="No hay productos en el historial" />
      ) : (
        <ProductsHistory />
      )}
    </>
  );
};
export default History;
