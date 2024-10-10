import React, { createContext, useState } from 'react';

// Create the Expense Context
export const ExpenseContext = createContext();

// ExpenseProvider component to wrap around the app and provide expense-related functionality
export const ExpenseProvider = ({ children }) => {
  // Define the expenses state
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Function to update an existing expense by index
  const updateExpense = (index, updatedExpense) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = updatedExpense;
    setExpenses(updatedExpenses);
  };

  // Function to delete an expense by index
  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
