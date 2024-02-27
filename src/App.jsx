import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./global/PageLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<h1>Home page</h1>} />
          <Route path="/cart" element={<h1>Home page</h1>} />
          <Route path="/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
