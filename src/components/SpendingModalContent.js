import React from 'react';
import "./SpendingModalContent.css";

function SpendingModalContent({
  newExpense,
  newAmount,
  setNewExpense,
  setNewAmount,
  addSpendingItem,
  closeModal,
}) {
  return (
    <div className="modal-content">
      <h3>Add Spending</h3>
      <div className="form-group">
        <label htmlFor="expense">Expense:</label>
        <input
          type="text"
          id="expense"
          className="form-control"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          className="form-control"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={addSpendingItem}
      >
        Add
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={closeModal}
      >
        Cancel
      </button>
    </div>
  );
}

export default SpendingModalContent;
