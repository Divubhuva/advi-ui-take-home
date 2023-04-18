import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container d-flex align-items-center">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
