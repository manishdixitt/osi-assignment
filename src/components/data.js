// // data.js

// let data = {
//     banks: [
//       { id: 1, name: 'SBI' },
//       { id: 2, name: 'CBI' },
//     ],
//     categories: [
//       { id: 1, name: 'Automobiles' },
//       { id: 2, name: 'Groceries' },
//       { id: 3, name: 'Food and Beverages' },
//     ],
//     expenses: [
//       { id: 1, name: 'Netflix', amount: 500, categoryId: 1, bankId: 1 },
//       { id: 2, name: 'YouTube Premium', amount: 200, categoryId: 2, bankId: 2 },
//     ],
//   };
  
//   const generateUniqueId = () => {
//     // Generate a unique ID here (you can use UUID or any other method)
//     return Date.now().toString();
//   };
  
//   const addBank = (name) => {
//     const newBank = { id: generateUniqueId(), name };
//     data.banks.push(newBank);
//   };
  
//   const deleteBank = (id) => {
//     data.banks = data.banks.filter((bank) => bank.id !== id);
//   };
  
//   const addCategory = (name) => {
//     const newCategory = { id: generateUniqueId(), name };
//     data.categories.push(newCategory);
//   };
  
//   const deleteCategory = (id) => {
//     data.categories = data.categories.filter((category) => category.id !== id);
//   };
  
//   const addExpense = (name, amount, categoryId, bankId) => {
//     const newExpense = { id: generateUniqueId(), name, amount, categoryId, bankId };
//     data.expenses.push(newExpense);
//   };
  
//   const deleteExpense = (id) => {
//     data.expenses = data.expenses.filter((expense) => expense.id !== id);
//   };
  
//   export {
//     data,
//     addBank,
//     deleteBank,
//     addCategory,
//     deleteCategory,
//     addExpense,
//     deleteExpense,
//   };
let data = {
  banks: [
    { id: 1, name: 'SBI' },
    { id: 2, name: 'CBI' },
  ],
  categories: [
    { id: 1, name: 'Automobiles' },
    { id: 2, name: 'Groceries' },
    { id: 3, name: 'Food and Beverages' },
  ],
  expenses: [],
};

const generateUniqueId = () => {
  // Generate a unique ID here (you can use UUID or any other method)
  return Date.now().toString();
};

const addBank = (name) => {
  const newBank = { id: generateUniqueId(), name };
  data.banks.push(newBank);
};

const deleteBank = (id) => {
  data.banks = data.banks.filter((bank) => bank.id !== id);
};

const addCategory = (name) => {
  const newCategory = { id: generateUniqueId(), name };
  data.categories.push(newCategory);
};

const deleteCategory = (id) => {
  data.categories = data.categories.filter((category) => category.id !== id);
};

const addExpense = (name, amount, categoryId, bankId) => {
  const newExpense = {
    id: generateUniqueId(),
    name,
    amount,
    categoryId,
    bankId,
  };
  data.expenses.push(newExpense);
};

const deleteExpense = (id) => {
  data.expenses = data.expenses.filter((expense) => expense.id !== id);
};

export {
  data,
  addBank,
  deleteBank,
  addCategory,
  deleteCategory,
  addExpense,
  deleteExpense,
};
