import React from 'react';
import classes from './Arrows.module.css';

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className={classes.arrows}>
        <span className={classes.prev} onClick={prevSlide}>
            &#10094;
        </span>
        <span className={classes.next} onClick={nextSlide}>
            &#10095;
        </span>
    </div>
  )
}

export default Arrows;