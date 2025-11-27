import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import Register from "../components/Register";
import About from "../components/About";
import { ProtectedRoute } from "./ProtectedRoute";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import Cart from "../components/common/Cart";
import AddressPage from "../components/Address";
import OrderSuccess from "../components/OrderSuccess";
import OrdersPage from "../components/MyOrders";
import ProfilePage from "../components/Profile";

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
          <Route path="/address" element={<AddressPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
