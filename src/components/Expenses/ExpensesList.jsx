import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return <h1 className="no-expenses">No Expense Found</h1>;
  }
  return (
    <ul className="expenses-list">
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
            expenseTitle={expense.title}
            expensePrice={expense.amount}
            expenseDate={expense.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
