import React, { useEffect, useState } from "react";
import styles from "./LoanDashboard.module.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";

function LoanDashboard() {
  const navigate = useNavigate();
  const [loan, setLoan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loansPerPage] = useState(5); // Change this value as needed
  const token = sessionStorage.getItem("token");
  const handleEdit = () => {
    navigate("/MyProfilePage");
  };
  const fetchLoanInfo = async (token, page, perPage) => {
    try {
      const response = await axios.get(`${API_URL}/loan-info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          perPage,
        },
      });
      setLoan(response.data.loans);
    } catch (error) {
      throw error.response.data;
    }
  };

  useEffect(() => {
    if (token) {
      fetchLoanInfo(token, currentPage, loansPerPage);
    }
  }, [token, currentPage, loansPerPage]);

  // const handleEdit = (id) => {
  //   console.log(`Editing loan with ID ${id}`);
  // };

  const handleCancel = (id) => {
    console.log(`Cancelling loan with ID ${id}`);
  };

  // Logic for pagination
  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = loan.slice(indexOfFirstLoan, indexOfLastLoan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {currentLoans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.purpose}</td>
                <td>{loan.status}</td>
                <td>
                  <button onClick={() => handleEdit()}>Edit</button>
                  <button onClick={() => handleCancel(loan.id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div>
          {loan.length > loansPerPage && (
            <ul className="pagination">
              {Array.from(
                { length: Math.ceil(loan.length / loansPerPage) },
                (_, i) => (
                  <li key={i} className={currentPage === i + 1 ? "active" : ""}>
                    <button onClick={() => paginate(i + 1)}>{i + 1}</button>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default LoanDashboard;
