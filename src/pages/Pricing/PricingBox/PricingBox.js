import React from 'react';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import iconcheck from '../../../Images/Pricing/icon-check.svg';
import classes from './PricingBox.module.css';
import '../../../index.scss';

const PricingBox = ({className, buttonbg, heading, price, describe, teamlists}) => {
  return (
        <Card className={classes["pricing-card"]}>
            <div className={`${classes["card-label"]} ${"bg-primary-2"} ${className}`}>
                        Recommended
            </div>
            <div className={classes["pricing-card-body"]}>
                <div className={classes["pricing-text-center"]}>
                    <h3>{heading}</h3>
                    <div className={classes["price-value-block"]}>
                        <span>₹</span>
                        <h1 className={`${'large-heading'} ${classes["pricing-value"]}`}>{price}</h1>
                    </div>
                    <span className='opacity'>per user, per month</span>
                </div>
                <div className={classes["pricing-description"]}>
                    {describe}
                </div>
                <ul className={classes["pricing-lists"]}>
                    <li><img src={iconcheck} alt="icon-check"/>{teamlists[0]}</li>
                    <li><img src={iconcheck} alt="icon-check"/>{teamlists[1]}</li>
                    <li><img src={iconcheck} alt="icon-check"/>{teamlists[2]}</li>
                    <li><img src={iconcheck} alt="icon-check"/>{teamlists[3]}</li>
                </ul>
                <Button className={`${classes["pricing-button"]} ${buttonbg}`}>Start free trial</Button>
            </div>
        </Card>
  )
}

export default PricingBox;