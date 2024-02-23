import React from 'react';
import classes from './CategoryContent.module.css';
import '../../../index.scss';

const CategoryContent = (props) => {
  return (
    <div className={classes["link-card"]}>
        <img src={props.medicine} className={classes["medicine-icon"]} alt="medicine-icon" />
        <div className="text-large">{props.name}</div>
    </div>
  )
}

export default CategoryContent;