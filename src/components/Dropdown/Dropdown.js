import React, { useState } from 'react';
import classes from './Dropdown.module.css';

const Dropdown = ({ id, name, options, value, selectedValue }) => {

  const [isActive, setIsActive] = useState(false);
 
  return (
        <div className={classes["dropdown"]}>
            <input type="text"
                   id={id} 
                   name={name} 
                   className={classes["text-box"]} 
                   value={value || "Select an option"}
                   onClick={(e) => setIsActive(!isActive)}
                   autoComplete="off" 
                   readOnly
            />
            {isActive && (<div className={classes["option"]}>
                {options.map(option => (
                    <div key={option} onClick={(e) => {
                                selectedValue(name, option)
                                setIsActive(false)}}>
                            {option}
                    </div>
                ))}
            </div>)}
        </div>
    )
}

export default Dropdown;