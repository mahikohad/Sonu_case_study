import React from "react";
import styles from "./LoanDashboard.module.css";

function LoanDashboard() {
  // Sample data for loans
  const loans = [
    { id: 1, purpose: "", status: "Pending" },
    { id: 2, purpose: "", status: "Approved" },
    { id: 3, purpose: "", status: "Rejected" },
    // Add more loan objects as needed
  ];

  const handleEdit = (id) => {
    // Handle edit button click
    console.log(`Editing loan with ID ${id}`);
  };

  const handleCancel = (id) => {
    // Handle cancel button click
    console.log(`Cancelling loan with ID ${id}`);
  };

  return (
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
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.purpose}</td>
              <td>{loan.status}</td>
              <td>
                <button onClick={() => handleEdit(loan.id)}>Edit</button>
                <button onClick={() => handleCancel(loan.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanDashboard;
