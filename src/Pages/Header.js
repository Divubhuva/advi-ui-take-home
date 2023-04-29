import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../Components/Logo";
import Category from "../Components/Category";
import SearchBar from "../Components/SearchBar";

const Header = ({ SearchForText }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const onSearch = (searchTerm) => {
    SearchForText(searchTerm);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const centerContent = <Category />;
  const rightContent = <SearchBar onSearch={onSearch} />;

  return (
    <header className="header">
      <div className="header-left">
        <Logo />
      </div>
      {isMobileView ? (
        <>
          <div className="header-right">{rightContent}</div>
          <div className="header-center">{centerContent}</div>
        </>
      ) : (
        <>
          <div className="header-center">{centerContent}</div>
          <div className="header-right">{rightContent}</div>
        </>
      )}
    </header>
  );
};

export default Header;
