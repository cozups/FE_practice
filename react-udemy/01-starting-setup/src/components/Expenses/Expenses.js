import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const saveYearHandler = (enteredYear) => {
    console.log(enteredYear);
    setSelectedYear(enteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSaveYear={saveYearHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
