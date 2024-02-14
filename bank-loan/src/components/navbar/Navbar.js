import React from "react";
import "./navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">
          Your Logo
        </a>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        {/* <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
