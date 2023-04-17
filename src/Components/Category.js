import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <nav className="navbar">
      <label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#business" className="navbar-link">
            Business
          </a>
        </li>
        <li className="navbar-item">
          <a href="#entertainment" className="navbar-link">
            Entertainment
          </a>
        </li>
        <li className="navbar-item">
          <a href="#general" className="navbar-link">
            General
          </a>
        </li>
        <li className="navbar-item">
          <a href="#health" className="navbar-link">
            Health
          </a>
        </li>
        <li className="navbar-item">
          <a href="#science" className="navbar-link">
            Science
          </a>
        </li>
        <li className="navbar-item">
          <a href="#sports" className="navbar-link">
            Sports
          </a>
        </li>
        <li className="navbar-item">
          <a href="#technology" className="navbar-link">
            Technology
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Category;
