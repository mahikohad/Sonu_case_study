import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage Component", () => {
  test("renders without crashing", () => {
    render(<HomePage />);
  });

  test("displays welcome message", () => {
    const { getByText } = render(<HomePage />);
    expect(
      // eslint-disable-next-line testing-library/prefer-screen-queries
      getByText("Welcome to US Bank Loan Application")
    ).toBeInTheDocument();
  });

  test("renders SignUpPage component", () => {
    const { getByTestId } = render(<HomePage />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("signup-page")).toBeInTheDocument();
  });

  // Add more test cases as needed
});
