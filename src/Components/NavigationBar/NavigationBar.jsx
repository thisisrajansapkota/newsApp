// NavigationBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Your Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/category1" className="nav-link">
                Category 1
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category2" className="nav-link">
                Category 2
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category3" className="nav-link">
                Category 3
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category4" className="nav-link">
                Category 4
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category5" className="nav-link">
                Category 5
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
