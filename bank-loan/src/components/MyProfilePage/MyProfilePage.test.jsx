/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyProfilePage from "./MyProfilePage";
import { UserContext } from "../context/context";

describe("MyProfilePage Component", () => {
  test("renders without crashing", () => {
    render(<MyProfilePage />);
  });

  test("displays My Profile title", () => {
    const { getByText } = render(<MyProfilePage />);
    expect(getByText("My Profile")).toBeInTheDocument();
  });

  test("displays form inputs with initial values from context", () => {
    const user = {
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com",
    };
    const { getByLabelText } = render(
      <UserContext.Provider value={{ user }}>
        <MyProfilePage />
      </UserContext.Provider>
    );
    expect(getByLabelText("First Name:")).toHaveValue("John");
    expect(getByLabelText("Last Name:")).toHaveValue("Doe");
    expect(getByLabelText("Email:")).toHaveValue("john@example.com");
  });

  test("handles form submission", () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <UserContext.Provider value={{ user: {} }}>
        <MyProfilePage />
      </UserContext.Provider>
    );

    fireEvent.click(getByText("Next"));
    // Add assertions for form submission behavior
  });

  test("handles cancel button click", () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <UserContext.Provider value={{ user: {} }}>
        <MyProfilePage />
      </UserContext.Provider>
    );

    fireEvent.click(getByText("Cancel"));
    // Add assertions for cancel button click behavior
  });

  // Add more test cases as needed
});
