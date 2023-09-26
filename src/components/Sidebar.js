// // import React, { useState } from "react";
// // import { Button, Modal } from "react-bootstrap"; // Import Bootstrap Modal components

// // function Sidebar() {
// //   const [showModal, setShowModal] = useState(false);

// //   const handleClose = () => setShowModal(false);
// //   const handleShow = () => setShowModal(true);

// //   return (
// //     <div className="sidebar_component">
// //       <h3 className="sidebar_component_heading">
// //         Financial<span>Expense</span>
// //       </h3>
// //       <div className="user-profile">
// //         <div className="user-image">
// //           <img
// //             src="images/profile.png"
// //             alt="User"
// //             className="img-fluid rounded-circle"
// //           />
// //         </div>
// //         <p className="">Welcome Back</p>
// //         <p className="">Sonam Wangchook</p>
// //       </div>
// //       <div className="accounts">
// //         <h6>Accounts</h6>
// //         <li>SBI</li>
// //         <li>CBI</li>
// //         <li>
// //           <a href="#" onClick={handleShow}>
// //             Add Another
// //           </a>{" "}
// //           {/* Open modal on click */}
// //         </li>
// //       </div>

// //       <div className="accounts">
// //         <h6>Categories of Expenses</h6>
// //         <li>Automobiles</li>
// //         <li>Groceries</li>
// //         <li>Food and Beverages</li>
// //         <li>Household</li>
// //         <li>Utilities</li>
// //         <li>
// //           <a href="#" onClick={handleShow}>
// //             Add More
// //           </a>
// //         </li>
// //       </div>

// //       {/* Modal for adding another account or category */}

// //       <Modal show={showModal} onHide={handleClose} style={{ paddingTop: '250px' }}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Add Another </Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body >
// //           {/* Your form or content for adding an account or category */}
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={handleClose}>
// //             Close
// //           </Button>
// //           <Button variant="primary" onClick={handleClose}>
// //             Save
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //     </div>
// //   );
// // }

// // export default Sidebar;

// import React, { useState } from "react";
// import { Button, Modal, Form } from "react-bootstrap";
// import { addBank, addCategory } from "../components/data";
// import { data } from "./data"; // Import the functions from your data.js file

// function Sidebar() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState("bank"); // 'bank' or 'category'
//   const [newName, setNewName] = useState("");

//   const handleClose = () => {
//     setShowModal(false);
//     setNewName("");
//   };

//   const handleShow = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };

//   const handleSave = () => {
//     if (modalType === "bank") {
//       addBank(newName);
//     } else if (modalType === "category") {
//       addCategory(newName);
//     }
//     handleClose();
//   };

//   return (
//     <div className="sidebar_component">
//       <h3 className="sidebar_component_heading">
//         Financial<span>Expense</span>
//       </h3>
//       <div className="user-profile">
//         <div className="user-image">
//           <img
//             src="images/profile.png"
//             alt="User"
//             className="img-fluid rounded-circle"
//           />
//         </div>
//         <p className="">Welcome Back</p>
//         <p className="name"><h5 className="user-name">Sonam Wangchook</h5></p>
//       </div>
//       <div className="accounts">
//         <h6>Accounts</h6>
//         <ul>

//           {data.banks.map((bank) => (
//             <li key={bank.id} style={{ listStyle: ''}}>{bank.name}</li>
//           ))}
//           <li>
//             <a href="#" onClick={() => handleShow("bank")}>
//               Add Another
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="accounts">
//         <h6>Categories of Expenses</h6>
//         <ul>
//           {/* Display existing categories */}
//           {data.categories.map((category) => (
//             <li key={category.id}>{category.name}</li>
//           ))}
//           <li>
//             <a href="#" onClick={() => handleShow("category")}>
//               Add More
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Modal for adding another bank or category */}
//       <Modal show={showModal} onHide={handleClose} style={{ paddingTop: '250px' }}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             Add {modalType === "bank" ? "Bank" : "Category"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={`Enter ${
//                   modalType === "bank" ? "bank" : "category"
//                 } name`}
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Sidebar;
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addBank, addCategory } from "../components/data";
import { data } from "./data";

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("bank");
  const [newName, setNewName] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setNewName("");
  };

  const handleShow = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleSave = () => {
    if (modalType === "bank") {
      addBank(newName);
    } else if (modalType === "category") {
      addCategory(newName);
    }
    handleClose();
  };

  return (
    <div className="sidebar_component">
      <h3 className="sidebar_component_heading">
        Financial<span>Expense</span>
      </h3>
      <div className="user-profile">
        <div className="user-image">
          <img
            src="images/profile.png"
            alt="User"
            className="img-fluid rounded-circle"
          />
        </div>
        <p className="">Welcome Back</p>
        <p className="name">
          <h5 className="user-name">Sonam Wangchook</h5>
        </p>
      </div>
      <div className="accounts">
        <h6>Accounts</h6>
        <ul>
          {data.banks.map((bank) => (
            <li key={bank.id} style={{ listStyle: "" }}>
              {bank.name}
            </li>
          ))}
          <li>
          <div className="add-container">
      <a href="#" onClick={() => handleShow("bank")}>
        <span className="add-icon">+</span> Add Another
      </a>
    </div>
          </li>
        </ul>
      </div>

      <div className="accounts">
        <h6>Categories of Expenses</h6>
        <ul>
          {data.categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
          <li>
          <div className="add-container">
      <a href="#" onClick={() => handleShow("category")}>
        <span className="add-icon">+</span> Add More
      </a>
    </div>
          </li>
        </ul>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        style={{ paddingTop: "250px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add {modalType === "bank" ? "Bank" : "Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${
                  modalType === "bank" ? "bank" : "category"
                } name`}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sidebar;
