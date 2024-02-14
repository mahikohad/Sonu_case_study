import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./components/HomePage/HomePage.jsx";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import MyProfilePage from "./components/MyProfilePage/MyProfilePage.jsx";
import AccountDetails from "./components/AccountDetails/AccountDetails.jsx";
import LoanDashboard from "./components/LoanDashboard/LoanDashboard.jsx";
import { ContextProvider } from "./components/context/context.jsx";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          {/* {/ <Route path="LoginPage" element={<LoginPage />} /> /} */}
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="LoanDashboard" element={<LoanDashboard />} />
          <Route path="AccountDetails" element={<AccountDetails />} />
          <Route path="MyProfilePage" element={<MyProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
