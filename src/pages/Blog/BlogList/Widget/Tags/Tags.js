import React from 'react';
import classes from './Tags.module.css';

const Tags = (props) => {
  return (
    <li>
        <div className={classes["badge"]}>{props.name}</div>
    </li>
  )
}

export default Tags;