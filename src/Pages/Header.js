import React from "react";
import "./Header.css";
import Logo from "../Components/Logo";
import Category from "../Components/Category";
import SearchBar from "../Components/SearchBar";

const onSearch = (searchTerm) => {
  console.log("Searching for:", searchTerm);
};

const Header = () => {
  return (
    <header className="header container">
      <div className="header-left">
        <Logo />
      </div>

      <div className="header-center d-flex justify-content-center">
        <Category />
      </div>

      <div className="header-right">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
