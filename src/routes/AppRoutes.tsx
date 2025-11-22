import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import CheckoutHeader from "../components/CheckoutHeader";
import Register from "../components/Register";
import About from "../components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<CheckoutHeader />} />
    </Routes>
  );
};

export default AppRoutes;
