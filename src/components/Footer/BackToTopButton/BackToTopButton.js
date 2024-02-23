import React from 'react';
import Button from '../../Button/Button';
import movetop from '../../../Images/Arrow/icon-chevron-up.svg';
import classes from './BackToTopButton.module.css';

const BackToTopButton = () => {

  const moveOnTOp = () => {
     window.scrollTo(0, 0);
  }

  return (
    <Button className={classes["move-on-top-button"]}
            onClick={moveOnTOp}>
                <img src={movetop} className={classes["move-on-top"]} alt="Move On Top"/>
    </Button>
  )
}

export default BackToTopButton;