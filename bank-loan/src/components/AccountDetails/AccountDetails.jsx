// import React, { useState } from "react";
// import styles from "./AccountDetails.module.css";

// function AccountDetails() {
//   const [accountingFirm, setAccountingFirm] = useState("");
//   const [accountantsName, setAccountantsName] = useState("");
//   const [telephone, setTelephone] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Submitted:", {
//       accountingFirm,
//       accountantsName,
//       telephone,
//       email,
//     });
//     // Here you can add logic to handle form submission, such as saving accountant's information
//   };

//   const handleCancel = () => {
//     // Here you can add logic to handle cancel button click, such as resetting form fields
//     setAccountingFirm("");
//     setAccountantsName("");
//     setTelephone("");
//     setEmail("");
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Accountant Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="accountingFirm">Accounting Firm:</label>
//           <input
//             type="text"
//             id="accountingFirm"
//             value={accountingFirm}
//             onChange={(e) => setAccountingFirm(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="accountantsName">Accountant's Name:</label>
//           <input
//             type="text"
//             id="accountantsName"
//             value={accountantsName}
//             onChange={(e) => setAccountantsName(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="telephone">Telephone:</label>
//           <input
//             type="tel"
//             id="telephone"
//             value={telephone}
//             onChange={(e) => setTelephone(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//           <button type="button" onClick={handleCancel}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AccountDetails;

import React, { useState } from "react";
import styles from "./AccountDetails.module.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

function AccountDetails() {
  const [accountingFirm, setAccountingFirm] = useState("");
  const [accountantsName, setAccountantsName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", {
      accountingFirm,
      accountantsName,
      telephone,
      email,
    });
    // Here you can add logic to handle form submission, such as saving accountant's information
  };

  const handleCancel = () => {
    // Here you can add logic to handle cancel button click, such as resetting form fields
    setAccountingFirm("");
    setAccountantsName("");
    setTelephone("");
    setEmail("");
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
        <h2>Accountant Information</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="accountingFirm">Accounting Firm:</label>
            <input
              type="text"
              id="accountingFirm"
              value={accountingFirm}
              onChange={(e) => setAccountingFirm(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="accountantsName">Accountant's Name:</label>
            <input
              type="text"
              id="accountantsName"
              value={accountantsName}
              onChange={(e) => setAccountantsName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
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
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountDetails;
