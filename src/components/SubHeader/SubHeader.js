import React from 'react';
import classes from './SubHeader.module.css';
import '../../index.scss';

const SubHeader = (props) => {
  return (
    <section className="section bg-primary-3">
        <h1 className={`${"text-center"} ${classes["about-heading"]}`}>{props.heading}</h1>
        <div className={`${"text-large text-center"} ${classes["sub-heading"]}`}>
            {props.subheading}
        </div>
    </section>
  )
}

export default SubHeader;