import React, { useState } from 'react';
import rightarrow from '../../Images/Questions/icon-chevron-right.svg';
import Card from '../Card/Card';
import classes from './Accordion.module.css';
import '../../index.scss';

const Accordion = (props) => {

  const [accordion, setAccordion] = useState(`${classes["expandable-text"]} ${classes["hide"]}`);
  const [arrow, setArrow] = useState(`${classes["expandable-arrow"]} ${classes["not-rotate"]}`);
  const [isAccordionClicked, setIsAccordionClicked] = useState(false);

  const accordionToggle = () => {
    if(!isAccordionClicked) {
        setAccordion(`${classes["expandable-text"]} ${classes["show"]}`);
        setArrow(`${classes["expandable-arrow"]} ${classes["rotate"]}`);
    } else {
        setAccordion(`${classes["expandable-text"]} ${classes["hide"]}`);
        setArrow(`${classes["expandable-arrow"]} ${classes["not-rotate"]}`);
    }
    setIsAccordionClicked(!isAccordionClicked);
  }

  return (
    <div className={classes["expandable"]}>
        <Card className={classes["questions-card"]}>
            <div className={classes["questions-body"]}>
                <div onClick={accordionToggle} className={classes["accordion-title"]}>
                    <h5 className={`${classes["expandable-heading"]} ${isAccordionClicked ? "text-primary-1" : ''}`}>
                        {props.question}
                    </h5>
                    <img src={rightarrow} className={arrow} alt="Arrow"/>
                </div>
                <div className={accordion}>
                    <p>
                       {props.answer}
                    </p>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Accordion;