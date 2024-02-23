import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CartViewPage from "./pages/cartViewPage";
import CheckoutPage from "./pages/checkoutPage";
import DetailsPage from "./pages/detailsPage";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart-view" element={<CartViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
