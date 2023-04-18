import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mx-auto justify-content-center">
          <li className="nav-item">
            <Link to="/business" className="nav-link">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/entertainment" className="nav-link">
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/general" className="nav-link">
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/health" className="nav-link">
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/science" className="nav-link">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sports" className="nav-link">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/technology" className="nav-link">
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Category;
