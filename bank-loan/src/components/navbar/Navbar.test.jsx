/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders without crashing", () => {
    render(<Navbar />);
  });

  test("displays US Bank logo", () => {
    const { getByAltText } = render(<Navbar />);
    expect(getByAltText("US Bank Logo")).toBeInTheDocument();
  });

  test("handles logout button click", () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<Navbar />);
    Object.defineProperty(window, "sessionStorage", {
      value: { removeItem: jest.fn() },
      writable: true,
    });

    fireEvent.click(getByText("Log-out"));

    expect(sessionStorage.removeItem).toHaveBeenCalledWith("token");
    // Add assertions for navigation to home page
  });

  // Add more test cases as needed
});
