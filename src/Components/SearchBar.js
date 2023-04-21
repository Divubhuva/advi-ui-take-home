import React, { useState } from 'react';
//import { useNavigate  } from "react-router-dom";
import './SearchBar.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  //const navigate = useNavigate();

  const handleSearch = () => {
    //event.preventDefault();
    onSearch(searchTerm);
    //navigate(`/search/${searchTerm}`);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={isMobile ? "article-search-bar-mobile" : "article-search-bar"}>
      <input
        type="text"
        placeholder="Search Here..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      {isMobile && (
      <button onClick={handleToggle} className="toggle-button">
        <span className="toggle-icon"></span>
      </button>
      )}
    </div>
  );
};

export default SearchBar;