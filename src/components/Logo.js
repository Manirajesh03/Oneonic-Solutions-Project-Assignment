import React from "react";
import logo from "../Assets/Images/logo.png";

const Logo = () => {
  return (
    <div className="d-flex justify-content-center my-logo mt-2">
      <img src={logo} alt="Logo" className="logo-img" />
    </div>
  );
};

export default Logo;
