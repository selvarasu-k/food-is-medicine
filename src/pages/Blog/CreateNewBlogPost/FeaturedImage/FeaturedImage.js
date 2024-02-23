import React, { useRef, useState } from 'react';
import classes from './FeaturedImage.module.css';
import dummyimage from '../../../../Images/FeaturedImage/dummy-image.jpeg';

const FeaturedImage = ({id, name}) => {

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
      inputRef.current.click();
  }

  const handleImageChange = (event) => {
      setImage(event.target.files[0]);
  }

  return (
    <div className={classes["browse-image"]}>
        {image ? (
          <img src={URL.createObjectURL(image)} className={classes["featured-image"]} alt={image.name} />
        ) : (
          <img src={dummyimage} className={classes["featured-image"]} alt="Featured" />
        )}
        <label id={id} className={classes["browse-image-label"]}>Replace your image and <span className={`${'text-primary-2'} ${classes["browse"]}`}
                                                                                      onClick={handleImageClick}>Browse image</span></label>
        <input type='file'
               id={id}
               name={name} 
               ref={inputRef} 
               onChange={handleImageChange} 
               style={{display: 'none'}}
        />
    </div>
  )
}

export default FeaturedImage;