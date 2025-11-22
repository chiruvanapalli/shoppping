import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ToastComp from "../shared/ToastComp";

const Layout = () => {
  return (
    <section className="app_wrapper">
      <ToastComp />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
