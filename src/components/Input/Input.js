import React from 'react';
import classes from './Input.module.css';

const Input = ({className, label, id, error, emailerror, ...props}) => {
  return (
    <div className={classes["form-group"]}>
        <div className={classes['align-input-text']}>
            <label htmlFor={id} className={`${classes["form-label"]} ${className}`}>{label}</label>
            <div className={classes["form-error"]}>{error}{emailerror}</div>
        </div>
        <input id={id} {...props} className={classes["form-input"]} autoComplete="off"/>
    </div>
  )
}

export default Input;