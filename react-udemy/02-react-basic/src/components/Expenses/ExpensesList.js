import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  // 반환하는 모든 jsx 콘텐츠가 바뀔때 아래와 같은 방법을 쓰는 것이 가능하다. 반면에 jsx 콘텐츠의 일부가 변경되는 경우에는 이 방법은 적절하지 않다.
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
