import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Root = () => {
  return (
    <div className="font-WorkSan">
      <Header />
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
};

export default Root;
