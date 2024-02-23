import React from 'react';
import classes from './Icons.module.css';

const Icons = (props) => {
  return (
        <li className={classes["social-icons"]}>
            <img src={props.icons} className={classes["icons"]} alt="social-icons" />
        </li>
  )
}

export default Icons;