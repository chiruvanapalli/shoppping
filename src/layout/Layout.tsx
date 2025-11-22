import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Layout = () => {
  return (
    <section className="app_wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
