import React from "react";

const ScheduledExpenses = () => {
  // Sample scheduled expenses data
  const scheduledExpenses = [
    { id: 1, name: "Netflix", amount: 500, image: "images/netflix.png" },
    { id: 2, name: "YouTube", amount: 200, image: "images/youtube.png" },
    { id: 3, name: "Hotstar", amount: 300, image: "images/close.png" },
  ];

  return (
    <div className="scheduled-expenses">
      <h4>Scheduled Expenses</h4>
      <div className="secard-container">
        {scheduledExpenses.map((expense) => (
          <div key={expense.id} className="card">
            <span className="price">₹ {expense.amount}/m</span>
            <img src={expense.image} alt={expense.name} className="logo" />
            <p className="title" style={{ textAlign: "left" }}>
              {expense.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledExpenses;
