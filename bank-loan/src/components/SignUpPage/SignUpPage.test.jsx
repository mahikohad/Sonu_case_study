/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import axios from "axios";
import SignUpPage from "./SignUpPage";

jest.mock("axios");

describe("SignUpPage Component", () => {
  test("renders without crashing", () => {
    render(<SignUpPage />);
  });

  test("displays registration form", () => {
    const { getByText, getByLabelText } = render(<SignUpPage />);
    expect(
      getByText("Register with us by entering below details")
    ).toBeInTheDocument();
    expect(getByLabelText("First Name:")).toBeInTheDocument();
    expect(getByLabelText("Last Name:")).toBeInTheDocument();
    expect(getByLabelText("User Name:")).toBeInTheDocument();
    expect(getByLabelText("Mobile Number:")).toBeInTheDocument();
    expect(getByLabelText("Email:")).toBeInTheDocument();
    expect(getByLabelText("Password:")).toBeInTheDocument();
    expect(getByText("Sign Up")).toBeInTheDocument();
  });

  test("handles form submission", () => {
    const { getByText, getByLabelText } = render(<SignUpPage />);
    fireEvent.change(getByLabelText("First Name:"), {
      target: { value: "John" },
    });
    fireEvent.change(getByLabelText("Last Name:"), {
      target: { value: "Doe" },
    });
    fireEvent.change(getByLabelText("User Name:"), {
      target: { value: "john.doe" },
    });
    fireEvent.change(getByLabelText("Mobile Number:"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(getByLabelText("Email:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByLabelText("Password:"), {
      target: { value: "password123" },
    });

    fireEvent.click(getByText("Sign Up"));
    // Add assertions for form submission behavior
  });

  test("handles navigation to login page", () => {
    const { getByText } = render(<SignUpPage />);
    fireEvent.click(getByText("Log-in"));
    // Add assertions for navigation to login page
  });

  // Add more test cases as needed
});
