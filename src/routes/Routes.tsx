import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error404 from "../pages/404";
import History from "../pages/History";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ShoppingCart from "../pages/ShoppingCart";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/history" element={<History></History>}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
