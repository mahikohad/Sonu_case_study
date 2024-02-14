// import React from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css";

// export default function HomePage() {
//   return (
//     <>
//       <div className="main-wrapper">
//         <h1 style={{ textAlign: "center" }}>
//           Welcome to US Bank Loan Application
//         </h1>
//         <div className="button-container">
//           <div>
//             <p>Click here if you are new customer</p>
//             <Link to="/SignUpPage">
//               <button> Sign Up</button>
//             </Link>
//           </div>
//           <div>
//             <p>Click here if you are existing customer</p>
//             <Link to="/LoginPage">
//               <button>Log-in</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import LoginPage from "../LoginPage/LoginPage";

export default function HomePage() {
  return (
    <>
      <div className="main-wrapper">
        <h2 style={{ textAlign: "center" }}>
          Welcome to US Bank Loan Application
        </h2>

        <LoginPage />

        <div className="button-container">
          {/* <div>
            <p>Click here if you are new customer</p>
            <Link to="/SignUpPage">
              <button> Sign Up</button>
            </Link>
          </div>
          <div>
            <p>Click here if you are existing customer</p>
            <Link to="/LoginPage">
              <button>Log-in</button>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
