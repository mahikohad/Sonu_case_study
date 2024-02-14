/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import LoginPage from "./LoginPage";

jest.mock("axios");

describe("LoginPage Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<LoginPage />);
  });

  test("displays login form", () => {
    const { getByText, getByLabelText } = render(<LoginPage />);
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByLabelText("Username:")).toBeInTheDocument();
    expect(getByLabelText("Password:")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });

  test("handles form submission and redirects on successful login", async () => {
    const mockedData = { data: { token: "testToken" } };
    axios.post.mockResolvedValueOnce(mockedData);
    const { getByLabelText, getByText } = render(<LoginPage />);

    fireEvent.change(getByLabelText("Username:"), {
      target: { value: "testUser" },
    });
    fireEvent.change(getByLabelText("Password:"), {
      target: { value: "testPassword" },
    });
    fireEvent.submit(getByText("Login"));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/login", {
      username: "testUser",
      password: "testPassword",
    });
    expect(sessionStorage.getItem("token")).toBe("testToken");
    expect(getByText("Login successful")).toBeInTheDocument();
    // Add assertions for navigation to LoanDashboard
  });

  test("handles form submission and shows error message on failed login", async () => {
    axios.post.mockRejectedValueOnce({
      response: { data: "Invalid credentials" },
    });
    const { getByLabelText, getByText } = render(<LoginPage />);

    fireEvent.change(getByLabelText("Username:"), {
      target: { value: "invalidUser" },
    });
    fireEvent.change(getByLabelText("Password:"), {
      target: { value: "invalidPassword" },
    });
    fireEvent.submit(getByText("Login"));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/login", {
      username: "invalidUser",
      password: "invalidPassword",
    });
    expect(getByText("Invalid Email Id or Password")).toBeInTheDocument();
  });

  // Add more test cases as needed
});
