import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
