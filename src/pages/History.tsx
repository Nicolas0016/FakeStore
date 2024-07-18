import ProductsHistory from "../components/History/ProductsHistory";
import useHistoryContext from "../components/hooks/useHistoryContext";
import Menu from "../components/Menu";
import NotProdcuts from "../components/ShoppingCart/NotProducts";
import "../styles/historyContainer.css";
const History = () => {
  const { state } = useHistoryContext();
  return (
    <>
      <Menu></Menu>
      {state.length === 0 ? (
        <NotProdcuts text="No hay productos en el historial" />
      ) : (
        <ProductsHistory />
      )}
    </>
  );
};
export default History;
