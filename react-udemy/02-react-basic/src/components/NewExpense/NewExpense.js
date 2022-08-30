import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [toAdd, setToAdd] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setToAdd(false);
  };

  const showExpenseFormHandler = () => {
    setToAdd(true);
  };

  const cancelHandler = () => {
    setToAdd(false);
  };

  let expenseForm = (
    <button onClick={showExpenseFormHandler}>Add New Expense</button>
  );

  if (toAdd) {
    expenseForm = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    );
  }

  return <div className="new-expense">{expenseForm}</div>;
};

export default NewExpense;
