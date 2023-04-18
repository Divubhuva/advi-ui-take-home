import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "./Category.css"; // Import the CSS file for styling

const Category = () => {

  return (
    <nav className="navbar">
      <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
      <label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/business" className="navbar-link">Business</Link>
        </li>
        <li className="navbar-item">
          <Link to="/entertainment" className="navbar-link">Entertainment</Link>
        </li>
        <li className="navbar-item">
          <Link to="/general" className="navbar-link">General</Link>
        </li>
        <li className="navbar-item">
          <Link to="/health" className="navbar-link">Health</Link>
        </li>
        <li className="navbar-item">
          <Link to="/science" className="navbar-link">Science</Link>
        </li>
        <li className="navbar-item">
          <Link to="/sports" className="navbar-link">Sports</Link>
        </li>
        <li className="navbar-item">
          <Link to="/technology" className="navbar-link">Technology</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Category;