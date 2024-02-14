import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import LoanDashboard from "./LoanDashboard";

jest.mock("axios");

describe("LoanDashboard Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<LoanDashboard />);
  });

  test("displays loan dashboard title", () => {
    const { getByText } = render(<LoanDashboard />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Loan Dashboard")).toBeInTheDocument();
  });

  test("fetches loan information when token is available", async () => {
    const mockedData = {
      data: {
        loans: [{ id: 1, purpose: "Home Loan", status: "Pending" }],
      },
    };
    axios.get.mockResolvedValueOnce(mockedData);

    render(<LoanDashboard />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/loan-info", {
      headers: {
        Authorization: `Bearer null`,
      },
      params: {
        page: 1,
        perPage: 5,
      },
    });
  });

  test("does not fetch loan information when token is not available", async () => {
    sessionStorage.setItem("token", "testToken");
    axios.get.mockResolvedValueOnce({ data: { loans: [] } });

    render(<LoanDashboard />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/loan-info", {
      headers: {
        Authorization: `Bearer testToken`,
      },
      params: {
        page: 1,
        perPage: 5,
      },
    });
  });

  test("handles edit button click", () => {
    const { getByText } = render(<LoanDashboard />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText("Edit"));
    // Add assertions for handleEdit function behavior
  });

  test("handles cancel button click", () => {
    const { getByText } = render(<LoanDashboard />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText("Cancel"));
    // Add assertions for handleCancel function behavior
  });

  // Add more test cases as needed
});
