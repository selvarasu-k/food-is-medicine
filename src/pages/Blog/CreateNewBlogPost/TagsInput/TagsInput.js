import React from 'react';
import classes from './TagsInput.module.css';

const TagsInput = (props) => {

  const handleKeyDown = (e) => {
    if(e.key !== 'Enter') return
    const value = e.target.value;
    if(!value.trim()) return
    props.selectedTags([...props.postTags, value]);
    e.target.value = '';
  }

  const removeTag = (index) => {
    const newTags = [...props.postTags.filter(tag => props.postTags.indexOf(tag) !== index)];
    props.selectedTags(newTags);
  }

  return (
    <div className={classes["tags-input-container"]}>
        {props.postTags && props.postTags?.map((tag, index) => (
            <div className={classes["tag-item"]} key={index}>
                <span className={classes["text"]}>{tag}</span>
                <span className={classes["close"]} onClick={() => removeTag(index)}>&times;</span>
            </div>
        ))}
        <input onKeyDown={handleKeyDown}
               type='text'
               id={props.id}
               name={props.name}
               className={classes['tags-input']}
               placeholder='Type Something...'
        />
    </div>
  )
}

export default TagsInput;