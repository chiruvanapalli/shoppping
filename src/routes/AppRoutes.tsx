import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import Register from "../components/Register";
import About from "../components/About";
import { ProtectedRoute } from "./ProtectedRoute";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import OrderSuccess from "../components/OrderSuccess";
import Checkout from "../components/Checkout";
import Cart from "../components/Cart";
import ProfilePage from "../components/Profile";
import OrdersPage from "../components/OrdersPage";
import Wishlist from "../components/Wishlist";
import StripeWrapper from "../components/payments/StripWrapper";
import PaymentPage from "../components/payments/Payment";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protect these routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-status" element={<OrderSuccess />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/payment"
            element={
              <StripeWrapper>
                <PaymentPage />
              </StripeWrapper>
            }
          />
        </Route>
      </Route>

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
