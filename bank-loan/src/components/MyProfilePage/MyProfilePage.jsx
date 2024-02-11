import React, { useState } from "react";
import styles from "./MyProfilePage.module.css";

function MyProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", { firstName, lastName, email, region });
    // Here you can add logic to handle form submission, such as updating user profile data
  };

  return (
    <div className={styles.container}>
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default MyProfilePage;
