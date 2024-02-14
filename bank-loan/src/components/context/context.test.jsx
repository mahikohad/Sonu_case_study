import React from "react";
import { render, act } from "@testing-library/react";
import { UserContext, ContextProvider } from "./context"; // Adjust the import path as needed

describe("ContextProvider Component", () => {
  beforeEach(() => {
    // Clear sessionStorage before each test
    sessionStorage.clear();
  });

  test("renders without crashing", () => {
    render(
      <ContextProvider>
        <div>Test Child</div>
      </ContextProvider>
    );
  });

  test("children components are rendered properly", () => {
    const { getByText } = render(
      <ContextProvider>
        <div>Test Child</div>
      </ContextProvider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  // Add more test cases as needed
});
