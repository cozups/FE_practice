import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  const labelName = props.for === 'email' ? 'E-Mail' : 'Password';

  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.for}>{labelName}</label>
      <input
        type={props.for}
        id={props.for}
        value={props.state.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
