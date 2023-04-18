import React from "react";
import "./Header.css";

import SearchBar from "../Components/SearchBar";
import Logo from "../Components/Logo";
import Category from "../Components/Category";

const onSearch = (searchTerm) => {
  console.log("Searching for:", searchTerm);
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Logo />
      </div>

      <div className="header-left">
        <Category />
      </div>

      <div className="header-right">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
