import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={isMobile ? "search-bar-mobile" : "search-bar"}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleToggle} className="toggle-button">
        <span className="toggle-icon"></span>
      </button>
    </div>
  );
};

export default SearchBar;
