import React from 'react';
import dummyimage from '../../../../Images/FeaturedImage/dummy-image.jpeg';
import classes from '../CategoryCard/CategoryCard.module.css';

const CategoryCard = (props) => {
  return (
    <div className={classes["card-block"]}>
            <div className={classes["card-content-block"]}>
                <img src={props.post_image ? props.post_image : dummyimage} className={classes["card-image-head"]} alt="blog-cards" />
                <div className={classes["card-body"]}>
                    <h4>{props.post_title}</h4>
                </div>
            </div>
            <div className={classes["card-foot"]}>
                <div className={classes["post-meta-left"]}>
                    <div className="text-small text-primary-1">{props.post_category}</div>
                </div>
                <div className={classes["post-meta-right"]}>
                    <div className="text-small">by</div>
                    <div className="text-small">{props.author}</div>
                </div>
            </div>
    </div>
  )
}

export default CategoryCard;