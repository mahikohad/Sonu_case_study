import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import SignUpPage from "../SignUpPage/SignUpPage";

export default function HomePage() {
  return (
    <>
      <div className="main-wrapper">
        <h2 style={{ textAlign: "center" }}>
          Welcome to US Bank Loan Application
        </h2>
        <SignUpPage />
      </div>
    </>
  );
}
