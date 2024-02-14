// import React from "react";
// import styles from "./LoanDashboard.module.css";

// function LoanDashboard() {
//   // Sample data for loans
//   const loans = [
//     { id: 1, purpose: "", status: "Pending" },
//     { id: 2, purpose: "", status: "Approved" },
//     { id: 3, purpose: "", status: "Rejected" },
//     // Add more loan objects as needed
//   ];

//   const handleEdit = (id) => {
//     // Handle edit button click
//     console.log(`Editing loan with ID ${id}`);
//   };

//   const handleCancel = (id) => {
//     // Handle cancel button click
//     console.log(`Cancelling loan with ID ${id}`);
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Loan Dashboard</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Loan ID</th>
//             <th>Purpose of Loan</th>
//             <th>Status</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loans.map((loan) => (
//             <tr key={loan.id}>
//               <td>{loan.id}</td>
//               <td>{loan.purpose}</td>
//               <td>{loan.status}</td>
//               <td>
//                 <button onClick={() => handleEdit(loan.id)}>Edit</button>
//                 <button onClick={() => handleCancel(loan.id)}>Cancel</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default LoanDashboard;

import React, { useEffect, useState } from "react";
import styles from "./LoanDashboard.module.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5000";
function LoanDashboard() {
  const [loan, setLoan] = useState();
  const token = localStorage.getItem("token");

  // Sample data for loans
  const loans = [
    { id: 1, purpose: "", status: "Pending" },
    { id: 2, purpose: "", status: "Approved" },
    { id: 3, purpose: "", status: "Rejected" },
    // Add more loan objects as needed
  ];
  const fetchLoanInfo = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/loan-info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data.loans);
      setLoan(response.data.loans);
    } catch (error) {
      throw error.response.data;
    }
  };

  useEffect(() => {
    if (token) {
      fetchLoanInfo(token);
    }
  }, []);

  const handleEdit = (id) => {
    // Handle edit button click
    console.log(`Editing loan with ID ${id}`);
  };

  const handleCancel = (id) => {
    // Handle cancel button click
    console.log(`Cancelling loan with ID ${id}`);
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
        <h2>Loan Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Purpose of Loan</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {loan &&
              loan.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.purpose}</td>
                  <td>{loan.status}</td>
                  <td>
                    <button onClick={() => handleEdit(loan.id)}>Edit</button>
                    <button onClick={() => handleCancel(loan.id)}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LoanDashboard;
