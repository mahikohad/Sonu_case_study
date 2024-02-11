import React, { useState } from "react";
import styles from "./SignUpPage.module.css";

function SignUpPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", { firstname, username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h2>Register with us by entering below details</h2>
        <br />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname" className={styles.label}>
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="lastname" className={styles.label}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="username" className={styles.label}>
              User Name:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="mobile No" className={styles.label}>
              Mobile Number:
            </label>
            <input
              type="text"
              id="umobile No"
              value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
