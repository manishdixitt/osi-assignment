import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./DailyTransaction.css";
import SpendingModalContent from "./SpendingModalContent";
import HorizontalCalendar from "./HorizontalCalendar";

import { data, addExpense, deleteExpense } from "./data";
// import SearchBar from './SearchBar';
import { PeopleAltOutlined } from "@mui/icons-material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

function DailyTransaction() {
  const incomeData = [
    { description: "Salary", amount: 2000 },
    { description: "Freelance", amount: 500 },
  ];

  const [spendingData, setSpendingData] = useState([]);
  const [newExpense, setNewExpense] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState(currentDate);

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addSpendingItem = () => {
    if (newExpense && newAmount) {
      const newItem = {
        description: newExpense,
        amount: parseFloat(newAmount),
      };
      addExpense(newItem.name, newItem.amount, 0, 0); // Adjust category and bank IDs as needed
      const updatedSpendingData = [...spendingData, newItem];
      localStorage.setItem("spendingData", JSON.stringify(updatedSpendingData));
      setSpendingData(updatedSpendingData);
      setNewExpense("");
      setNewAmount("");
      closeModal();
    }
  };

  useEffect(() => {
    const storedSpendingData = JSON.parse(localStorage.getItem("spendingData"));
    if (storedSpendingData) {
      setSpendingData(storedSpendingData);
    }
  }, [spendingData]);

  const deleteExpenseItem = (id) => {
    deleteExpense(id);
    const updatedExpenses = spendingData.filter((expense) => expense.id !== id);
    localStorage.setItem("spendingData", JSON.stringify(updatedExpenses));
    setSpendingData(updatedExpenses);
  };
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter your data based on the search query
  const filteredExpenses = spendingData.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="daily-transaction">
      <div className="transaction-header">
        <h4 className="daily">Daily Transaction</h4>
        <span style={{ marginLeft: "350px" }}>
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
        </span>
        <button
          type="button"
          className="plus-icon"
          onClick={openModal}
          style={{ marginLeft: "20px" }}
        >
          +
        </button>
      </div>

      {/* <SearchBar /> */}

      <div className="search-box">
        <input
          type="text"
          className="searchField"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <HorizontalCalendar />

      {/* <div class="container-card">
        <div className="income-card card">
          <div className="card-body">
            <h5 className="card-title">Income</h5>
            {incomeData.map((item, index) => (
              <p key={index} className="card-text">
                ${item.amount}
              </p>
            ))}
          </div>
        </div>

        <div className="spending-card card">
          <div className="card-body">
            <h5 className="card-title">Spending</h5>
            <ul>
              {data.expenses.map((item) => (
                <li key={item.id}>
                  ${item.amount}
                  <button onClick={() => deleteExpenseItem(item.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
      <hr
        style={{ width: "100%", border: "1px solid #d3d3d3", margin: "1rem 0.5rem" }}
      />
      <div className="income-div">
        {expenses.map((income, index) => {
          return (
            <div className="expenses">
              {income.icon}
              <div className="titles">
                <label>{income.title}</label>
                <label style={{ fontWeight: "bold" }}>{income.amount}</label>
              </div>
            </div>
          );
        })}
      </div>

      <div className="companies">
        {companies.map((company, index) => {
          return (
            <div className="company">
              <div className="title-div">
                {company.icon}
                <div className="titles">
                  <label>{company.title}</label>
                  <label>{company.dateTime}</label>
                </div>
              </div>

              <label>{company.amount}</label>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Spending Modal"
      >
        <SpendingModalContent
          newExpense={newExpense}
          newAmount={newAmount}
          setNewExpense={setNewExpense}
          setNewAmount={setNewAmount}
          addSpendingItem={addSpendingItem}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}

export default DailyTransaction;

const companies = [
  {
    title: "Amazon",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123",
  },
  {
    title: "Amazon",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123d",
  },
  {
    title: "Adidas",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123csd",
  },
  {
    title: "Paytm",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123dsa",
  },

  {
    title: "UPS Shipping",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123sdas",
  },
  {
    title: "Nike",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123sdarr",
  },
  {
    title: "Rolex",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123dad3w3",
  },
  {
    title: "Celio",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123asdasd",
  },
  {
    title: "Jordon",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123cde0",
  },
  {
    title: "Zudio",
    dateTime: "17 June 2023 05:30",
    icon: <PeopleAltOutlined />,
    amount: "500",
    id: "123,.dsaod9",
  },
];

const expenses = [
  {
    title: "Income",
    icon: <CallReceivedIcon />,
    amount: "5600",
    id: "123",
  },
  {
    title: "Expenses",
    icon: <ArrowOutwardIcon />,
    amount: "5800",
    id: "123d",
  },
];
