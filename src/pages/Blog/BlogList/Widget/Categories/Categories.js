import React from 'react';
import classes from './Categories.module.css';

const Categories = (props) => {
  return (
    <li className={classes["categories-links"]}>
        <div className='text-primary-1'>{props.title}</div>
        <img src={props.arrow} className={classes["caret-right"]} alt='caret-right'/>
    </li>
  )
}

export default Categories;