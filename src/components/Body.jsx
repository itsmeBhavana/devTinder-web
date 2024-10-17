import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div data-theme="dark" className="h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
