import React, { useRef, useState } from 'react';
import classes from './FeaturedImage.module.css';
import dummyimage from '../../../../Images/FeaturedImage/dummy-image.jpeg';
import { toast } from 'react-toastify';
import { postCloudnaryImageRequest } from '../../../../http';

const FeaturedImage = ({id, name, setArticles, postImage}) => {

  const preset_key = "article_pic";
  const cloud_name = "food-is-medicine";

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
      inputRef.current.click();
  }

  const handleImageChange = async (files) => {
      try {
        const formData = new FormData();
        formData.append("file", files);
        formData.append("upload_preset", preset_key);
        formData.append("cloud_name", cloud_name);
  
        const getUrl = await postCloudnaryImageRequest(cloud_name, formData);
  
        setImage(getUrl);
        setArticles((prevValues) => {
          return {
            ...prevValues,
            post_image: getUrl
          };
        });
      } catch (error) {
        toast.error(error);
      }
  }

  return (
    <div className={classes["browse-image"]}>
        {postImage !=='' ? (
          <img src={postImage || image} className={classes["featured-image"]} alt={image.name} />
        ) : (
          <img src={dummyimage} className={classes["featured-image"]} alt="Featured" />
        )}
        <div className={classes["browse-image-block"]}>
          <label htmlFor={id} className={classes["browse-image-label"]}>Replace your image and </label>
          <div className={`${'text-primary-2'} ${classes["browse"]}`} onClick={handleImageClick}>Browse image</div>
        </div>
        <input type='file'
               id={id}
               name={name} 
               ref={inputRef} 
               onInput={(e) => handleImageChange(e.target.files[0])} 
               style={{display: 'none'}}
        />
    </div>
  )
}

export default FeaturedImage;