import React from 'react';
import classes from './ProfileIcon.module.css';

const SaveButton = ({text, type}) => {
  return (
    <button type={type} className={`${classes["profile-icon"]} ${classes["profile-button"]}`}>
            {text}
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="var(--ci-primary-color, currentColor)" d="M472.971,122.344,373.656,23.029A23.838,23.838,0,0,0,356.687,16H56A24.028,24.028,0,0,0,32,40V472a24.028,24.028,0,0,0,24,24H456a24.028,24.028,0,0,0,24-24V139.313A23.838,23.838,0,0,0,472.971,122.344ZM320,48v96H176V48ZM448,464H64V48h80V176H352V48h1.373L448,142.627Z" className="ci-primary"/>
                <path fill="var(--ci-primary-color, currentColor)" d="M252,224a92,92,0,1,0,92,92A92.1,92.1,0,0,0,252,224Zm0,152a60,60,0,1,1,60-60A60.068,60.068,0,0,1,252,376Z" className="ci-primary"/>
            </svg>
    </button>
  )
}

export default SaveButton;