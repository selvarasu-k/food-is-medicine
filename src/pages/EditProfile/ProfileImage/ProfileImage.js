import React, { useRef, useState } from 'react';
import dummyprofile from '../../../Images/Profile/dummy-profile.jpeg';
import classes from './ProfileImage.module.css';
import EditIcon from '../../../Images/Profile/EditIcon';

const ProfileImage = ({id, name, label}) => {

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
      inputRef.current.click();
  }

  const handleImageChange = (event) => {
      setImage(event.target.files[0]);
  }

  return (
        <div className={classes["edit-image"]}>
            {image ? (
            <img src={URL.createObjectURL(image)} className={classes["profile-image"]} alt={image.name} />
            ) : (
            <img src={dummyprofile} className={classes["profile-image"]} alt="Profile" />
            )}
            <EditIcon className={classes["set-icon"]} onClick={handleImageClick}/>
            <label htmlFor={id} className={classes["hide-profile-image"]}>{label}</label>
            <input type='file'
                   name={name}
                   id={id} 
                   ref={inputRef} 
                   onChange={handleImageChange} 
                   style={{display: 'none'}}
            />
        </div>
    )
}

export default ProfileImage;