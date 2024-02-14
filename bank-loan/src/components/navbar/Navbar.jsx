import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"; // Import your CSS file for styling
import usbank from "../Assets/us bank.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-container">
          <img src={usbank} alt="US Bank Logo" className="logo" />
          <button
            onClick={toggleMenu}
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {menuOpen && (
          <div className="menu-card">
            <ul className="nav-menu">
              <li>
                <Link to="/LoanDashboard">Loan Dashboard</Link>
              </li>
              <li>
                <Link to="/MyProfilePage">My Profile</Link>
              </li>
              <li>
                <Link to="/AccountDetails">Accountant Information</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log-out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
