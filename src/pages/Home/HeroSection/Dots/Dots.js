import React from 'react';
import classes from './Dots.module.css';

const Dots = ({ activeindex, onClick, imageSlider }) => {
  return (
    <div className={classes["all-dots"]}>
        {imageSlider.map((slide, index) => (
            <span key={index}
                  className={`${activeindex === index ? classes['dot'] + " " + classes['active-dot'] : classes['dot']}`}
                  onClick={() => onClick(index)}></span>
        ))}
    </div>
  )
}

export default Dots;