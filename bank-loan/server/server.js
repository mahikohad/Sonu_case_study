// // app.js

// const express = require("express");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const fs = require("fs");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 4000;
// const SECRET_KEY = process.env.SECRET_KEY || 123;

// app.use(bodyParser.json());

// // Register API
// app.post("/register", (req, res) => {
//   const { firstname, lastname, mobile, username, password, email } = req.body;

//   // Load existing users data from file or initialize to an empty array
//   let users = [];
//   try {
//     const usersData = fs.readFileSync("users.json");
//     users = JSON.parse(usersData);
//   } catch (error) {
//     console.error("Error reading file:", error);
//   }

//   // Check if username or email already exists
//   if (
//     users.some((user) => user.username === username || user.email === email)
//   ) {
//     return res
//       .status(400)
//       .json({ message: "Username or email already exists" });
//   }

//   // Add new user to the array
//   users.push({ firstname, lastname, mobile, username, password, email });

//   // Write updated users data to file
//   fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

//   res.status(201).json({ message: "User registered successfully" });
// });

// // Login API
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   // Load users data from file
//   let users = [];
//   try {
//     const usersData = fs.readFileSync("users.json");
//     users = JSON.parse(usersData);
//   } catch (error) {
//     console.error("Error reading file:", error);
//   }

//   // Check if username and password match
//   const user = users.find(
//     (user) => user.username === username && user.password === password
//   );
//   if (!user) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }

//   // Generate JWT token
//   const token = jwt.sign({ username: user.username }, SECRET_KEY, {
//     expiresIn: "1h",
//   });

//   // Prepare user data to send along with the token
//   const userData = {
//     firstname: user.firstname,
//     lastname: user.lastname,
//     username: user.username,
//     mobile: user.mobile,
//     email: user.email,
//   };

//   // Send response with token and user data
//   res.json({ token, userData });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.js

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const SECRET_KEY = process.env.SECRET_KEY || 123;

app.use(bodyParser.json());
app.use(cors());

// Register API
app.post("/register", async (req, res) => {
  const { firstname, lastname, mobile, username, password, email } = req.body;

  // Load existing users data from file or initialize to an empty array
  let users = [];
  try {
    const usersData = fs.readFileSync("users.json");
    users = JSON.parse(usersData);
  } catch (error) {
    console.error("Error reading file:", error);
  }

  // Check if username or email already exists
  if (
    users.some((user) => user.username === username || user.email === email)
  ) {
    return res
      .status(400)
      .json({ message: "Username or email already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add new user to the array
  users.push({
    firstname,
    lastname,
    mobile,
    username,
    password: hashedPassword,
    email,
  });

  // Write updated users data to file
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  res.status(201).json({ message: "User registered successfully" });
});

// Login API
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Load users data from file
  let users = [];
  try {
    const usersData = fs.readFileSync("users.json");
    users = JSON.parse(usersData);
  } catch (error) {
    console.error("Error reading file:", error);
  }

  // Find user by username
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Compare hashed passwords
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Omit password from the user object
  const { password: hashedPassword, ...userData } = user;

  // Generate and send JWT token
  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  // Send response with token and user data (excluding password)
  res.json({ token, user: userData });
});

//loans API
// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({ error: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY); // Extract token without 'Bearer ' prefix
    console.log("Decoded:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

// GET API to retrieve data from loanInfo.json
app.get("/loan-info", verifyToken, (req, res) => {
  // Read data from loanInfo.json
  fs.readFile("loansInfo.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data" });
    }

    const loanInfo = JSON.parse(data);
    res.json(loanInfo);
  });
});

// Update Accountant Details API
app.put("/update-accountant-details/:loanId", verifyToken, (req, res) => {
  const loanId = parseInt(req.params.loanId); // Convert loanId to integer
  const {
    AccountingFirm,
    AccountantsName,
    AccountantsTelephoneNumber,
    AccountantsEmailAddress,
  } = req.body;

  // Load loan data from file
  let loanData = {};
  try {
    const loansData = fs.readFileSync("loansInfo.json");
    loanData = JSON.parse(loansData);
  } catch (error) {
    console.error("Error reading loansInfo.json:", error);
    return res.status(500).json({ error: "Failed to read loan data" });
  }

  // Find the loan by its ID
  const loan = loanData.loans.find((loan) => loan.id === loanId);

  if (!loan) {
    return res.status(404).json({ error: "Loan not found" });
  }

  // Update accountant details
  loan.accountant = {
    "Accounting Firm": AccountingFirm,
    "Accountant's Name": AccountantsName,
    "Accountant's Telephone Number": AccountantsTelephoneNumber,
    "Accountant's Email Address": AccountantsEmailAddress,
  };

  // Mark loan status as completed
  loan.status = "completed";

  // Write updated loan data to file
  fs.writeFile("loansInfo.json", JSON.stringify(loanData, null, 2), (err) => {
    if (err) {
      console.error("Error writing loansInfo.json:", err);
      return res.status(500).json({ error: "Failed to update loan data" });
    }
    res.json({
      message:
        "Accountant details updated successfully and loan status marked as completed",
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Get my profile info
app.get("/profile", verifyToken, (req, res) => {
  // Read data from userInfo.json
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data" });
    }

    const userInfo = JSON.parse(data);
    res.json(userInfo);
  });
});
