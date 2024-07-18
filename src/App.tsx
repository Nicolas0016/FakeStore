import { AppProvider } from "./components/context/AppContext";
import { CartProvider } from "./components/context/CartContext";
import HistoryProvider from "./components/context/HistoryContext";
import { FiltersProvider } from "./components/context/ProductsFilterContext";
import AppRoutes from "./routes/Routes";
function App() {
  return (
    <main>
      <AppProvider>
        <FiltersProvider>
          <HistoryProvider>
            <CartProvider>
              <AppRoutes></AppRoutes>
            </CartProvider>
          </HistoryProvider>
        </FiltersProvider>
      </AppProvider>
    </main>
  );
}

export default App;
