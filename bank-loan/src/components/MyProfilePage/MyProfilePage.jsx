import React, { useState, useContext } from "react";
import styles from "./MyProfilePage.module.css";
import Navbar from "../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";

function MyProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const navigate = useNavigate();
  // const { user, setUser } = useContext(UserContext);

  const user = JSON.parse(sessionStorage.getItem("userdata"));
  console.log("user", user);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/AccountDetails");
    console.log("Submitted:", { firstName, lastName, email, region });
    // Here you can add logic to handle form submission, such as updating user profile data
  };

  const handleCancel = () => {
    navigate("/LoanDashboard");
  };
  return (
    <>
      <Navbar />
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/LoanDashboard">Loan Dashboard</Link>
          </li>
          <li>
            <Link to="/MyProfilePage">My Profile</Link>
          </li>
          <li>
            <Link to="/AccountDetails">Accountant Information</Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2>My Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={user?.firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={user?.lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={user?.email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="region">Region:</label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="">Select Region</option>
              <option value="North America">Pune</option>
              <option value="Europe">Hyderabad</option>
              <option value="Asia">Banglore</option>
              <option value="South America">Delhi</option>
              <option value="Africa">Chennai</option>
              <option value="Australia">Goa</option>
            </select>
          </div>
          <button type="submit">Next</button>
          <button type="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default MyProfilePage;
