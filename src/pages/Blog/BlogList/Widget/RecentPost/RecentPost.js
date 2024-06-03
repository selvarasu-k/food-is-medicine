import React from 'react';
import dummyimage from '../../../../../Images/FeaturedImage/dummy-image.jpeg';
import classes from './RecentPost.module.css';

const RecentPost = (props) => {
  return (
    <li className={classes["recent-post"]}>
        <img src={props.postimage ? props.postimage : dummyimage} className={classes["post-image"]} alt="recent-post"/>
        <div>{props.posttitle}</div>
    </li>
  )
}

export default RecentPost;