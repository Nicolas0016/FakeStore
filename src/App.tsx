import { AppProvider } from "./components/context/AppContext";
import { CartProvider } from "./components/context/CartContext";
import { FiltersProvider } from "./components/context/ProductsFilterContext";
import AppRoutes from "./routes/Routes";
function App() {
  return (
    <main>
      <AppProvider>
        <FiltersProvider>
          <CartProvider>
            <AppRoutes></AppRoutes>
          </CartProvider>
        </FiltersProvider>
      </AppProvider>
    </main>
  );
}

export default App;
