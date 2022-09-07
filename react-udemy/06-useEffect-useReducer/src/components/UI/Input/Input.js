import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const labelName = props.for === 'email' ? 'E-Mail' : 'Password';
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.for}>{labelName}</label>
      <input
        ref={inputRef}
        type={props.for}
        id={props.for}
        value={props.state.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
