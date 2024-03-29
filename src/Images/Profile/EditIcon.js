import React from 'react';
import classes from './ProfileIcon.module.css';

const EditIcon = ({className, onClick}) => {
  return (
    <span className={`${classes["profile-icon"]} ${className}`} onClick={onClick}>
        <svg width="24px" height="24px" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m400 480h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-161.9-302.1-135.7 135.7-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3 135.7-135.7c2.3-2.3 2.3-6.1 0-8.5l-55.5-55.5c-2.5-2.4-6.3-2.4-8.6-.1zm106.9-12.8-30.1-30.1c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0l23.1-23.1c9.3-9.3 9.3-24.5 0-33.9z"/>
        </svg>
    </span>
  )
}

export default EditIcon;