import React, { useState } from 'react';
import classes from './Dropdown.module.css';

const Dropdown = ({ id, name, options }) => {

  const [selected, setSelected] = useState("Select an option");
  const [isActive, setIsActive] = useState(false);

  return (
        <div className={classes["dropdown"]}>
            <input type="text"
                   id={id} 
                   name={name} 
                   className={classes["text-box"]} 
                   value={selected}
                   onClick={(e) => setIsActive(!isActive)} 
                   readOnly
            />
            {isActive && (<div className={classes["option"]}>
                {options.map(option => (
                    <div key={option} onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)}}>
                            {option}
                    </div>
                ))}
            </div>)}
        </div>
        
    )
}

export default Dropdown;