import React, { useState } from 'react';
import classes from './TagsInput.module.css';

const TagsInput = ({id, name}) => {

  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if(e.key !== 'Enter') return
    const value = e.target.value;
    if(!value.trim()) return
    setTags([...tags, value])
    e.target.value = '';
  }

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <div className={classes["tags-input-container"]}>
        {tags.map((tag, index) => (
            <div className={classes["tag-item"]} key={index}>
                <span className={classes["text"]}>{tag}</span>
                <span className={classes["close"]} onClick={() => removeTag(index)}>&times;</span>
            </div>
        ))}
        <input onKeyDown={handleKeyDown}
               type='text'
               id={id}
               name={name}
               className={classes['tags-input']}
               placeholder='Type Something...'
        />
    </div>
  )
}

export default TagsInput;