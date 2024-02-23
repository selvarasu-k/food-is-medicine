import React from 'react';
import classes from './ProfileIcon.module.css';

const Help = ({text}) => {
  return (
    <span className={classes["profile-icon"]}>
        <svg height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="m18 2a16 16 0 1 0 16 16 16 16 0 0 0 -16-16zm0 30a14 14 0 1 1 14-14 14 14 0 0 1 -14 14z"/>
            <path d="m18.29 8.92a7.38 7.38 0 0 0 -5.72 2.57 1 1 0 0 0 -.32.71.92.92 0 0 0 .95.92 1.08 1.08 0 0 0 .71-.29 5.7 5.7 0 0 1 4.33-2c2.36 0 3.83 1.52 3.83 3.41v.05c0 2.21-1.76 3.44-4.54 3.65a.8.8 0 0 0 -.76.92s0 2.32 0 2.75a1 1 0 0 0 1 .9h.11a1 1 0 0 0 .9-1v-2.06c3-.42 5.43-2 5.43-5.28v-.05c-.03-3-2.37-5.2-5.92-5.2z"/>
            <circle cx="17.78" cy="26.2" r="1.25"/>
            <path d="m0 0h36v36h-36z" fill="none"/>
        </svg>
        {text}
    </span>
  )
}

export default Help;