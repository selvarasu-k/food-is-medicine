import React from 'react';
import classes from './Input.module.css';

const Input = ({className, label, id, ...props}) => {
  return (
    <div className={classes["form-group"]}>
        <label htmlFor={id} className={`${classes["form-label"]} ${className}`}>{label}</label>
        <input id={id} {...props} className={classes["form-input"]} autoComplete="off"/>
        <div className={classes["form-error"]}></div>
    </div>
  )
}

export default Input;