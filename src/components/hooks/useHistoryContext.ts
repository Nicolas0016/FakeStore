import { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";
const useHistoryContext = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
export default useHistoryContext;
