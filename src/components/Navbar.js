// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container nav_container">
//         <a className="navbar-brand" href="#">
//           Financial Expense
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <ul className="navbar-nav ml-auto nav_list">
//           <div>
//             <li className="nav-item">
//               <i class="fa-solid fa-house"></i>
//               <a className="nav-link" href="#">
//                 <i class="fa-solid fa-house"></i>
//                 Dashboard
//               </a>
//             </li>
//             <li className="nav-item">
//               <i class="fa-solid fa-wallet"></i>
//               <a className="nav-link" href="#">
//                 Wallet
//               </a>
//             </li>
//             <li className="nav-item">
//               {" "}
//               <i class="fa-solid fa-radio"></i>
//               <a className="nav-link" href="#">
//                 Investments
//               </a>
//             </li>
//           </div>
//           <li className="nav-item">
//             <div className="ml-auto">
//               <a className="nav-link" href="#">
//                 <i className="fa fa-cog"></i>
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container nav_container">
//         <a className="navbar-brand" href="#">
//           Financial Expense
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <ul className="navbar-nav ml-auto nav_list">
//           <div>
//             <li className="nav-item">
//               <i className="fa fa-home"></i> {/* Add the icon for Dashboard */}
//               <a className="nav-link" href="#">
//                 Dashboard
//               </a>
//             </li>
//             <li className="nav-item">
//               <i className="fa fa-wallet"></i> {/* Add the icon for Wallet */}
//               <a className="nav-link" href="#">
//                 Wallet
//               </a>
//             </li>
//             <li className="nav-item">
//               <i className="fa fa-line-chart"></i> {/* Add the icon for Investments */}
//               <a className="nav-link" href="#">
//                 Investments
//               </a>
//             </li>
//           </div>
//           <li className="nav-item">
//             <div className="ml-auto">
//               <a className="nav-link" href="#">
//                 <i className="fa fa-cog"></i>
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container nav_container">
        {/* <a className="navbar-brand" href="#">
          Financial Expense
        </a> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <ul className="navbar-nav ml-auto nav_list">
          <div className="nav-side">
            <li className="nav-item">
              <i className="fa fa-home fa-lg mr-2"></i>{" "}
              {/* Increase icon size */}
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item opa-50">
              <i className="fa fa-money fa-lg mr-2"></i>{" "}
              {/* Increase icon size */}
              <a className="nav-link" href="#">
                Wallet
              </a>
            </li>
            <li className="nav-item opa-50">
              <i className="fa fa-line-chart fa-lg mr-2"></i>{" "}
              {/* Increase icon size */}
              <a className="nav-link" href="#">
                Investments
              </a>
            </li>
          </div>
          <li className="nav-item">
            <div className="ml-auto">
              <a className="nav-link" href="#">
                <i className="fa fa-cog fa-lg"></i> {/* Increase icon size */}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
