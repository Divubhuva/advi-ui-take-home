import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const options = [
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "general", label: "General" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    navigate(`/${selectedOption}`);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <select
        className="navbar-toggler"
        value={selectedOption}
        onChange={handleOptionChange}
        aria-label="Toggle navigation"
      >
        <option value="">All Category</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mx-auto justify-content-center">
          {options.map((option) => (
            <li key={option.value} className="nav-item">
              <Link to={`/${option.value}`} className="nav-link">
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Category;
