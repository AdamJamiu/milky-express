import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./global/PageLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import OrderCompleted from "./pages/OrderCompleted";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-successful" element={<OrderCompleted />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
