import React, { useEffect, useRef, useState } from "react";
import dummyprofile from "../../../Images/Profile/dummy-profile.jpeg";
import EditIcon from "../../../Images/Profile/EditIcon";
import EditButton from "../../../Images/Profile/EditButton";
import SaveButton from "../../../Images/Profile/SaveButton";
import classes from "../EditProfile.module.css";
import { toast } from "react-toastify";
import { getIdRequest, getRequest, postCloudnaryImageRequest } from "../../../http";
import { authLoader } from "../../../util/auth";
import { useOutletContext } from "react-router-dom";

const ProfileImage = () => {

  const preset_key = "profile_pic";
  const cloud_name = "food-is-medicine";

  const context = useOutletContext();

  const inputRef = useRef(null);

  const [showProfileData, setShowProfileData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const authId = authLoader();
        const getAuthId = authId != null ? authId.toString() : "";

        if (getAuthId !== "") {
          const getId = await getIdRequest(getAuthId);
          const getUserId = getId != null ? getId : "";

          const getUser = await getRequest(
            "https://json-server-deployment-uepg.onrender.com/users/" + getUserId
          );

          const checkProfile = getUser.profile.profile_picture  !== '';
          setShowProfileData(checkProfile);
          
        }
      } catch (error) {
        return window.confirm(error);
      }
    };

    fetchUser();
  }, [setShowProfileData]);

  const [Url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const editData = () => {
    setShowProfileData(showProfileData);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = async (files) => {
    try {
      const formData = new FormData();
      formData.append("file", files);
      formData.append("upload_preset", preset_key);
      formData.append("cloud_name", cloud_name);

      setIsLoading(true);
      const getUrl = await postCloudnaryImageRequest(cloud_name, formData);
      setIsLoading(false);

      setUrl(getUrl);
      context.setUpdateUsersData((prevValues) => {
        return {
          ...prevValues,
          profile: {
            ...prevValues.profile,
              profile_picture: getUrl
          }
        };
      });
    } catch (error) {
      toast.error(error);
    }
  };

  const handlingEditProfilePicture = (event) => {
    event.preventDefault();
    if (context.updateUsersData.profile.profile_picture === "") {
      window.confirm("Please upload image");
    } else {
      setShowProfileData(!showProfileData);
    }
    context.callEditProfile();
  };

  return (
    <form onSubmit={handlingEditProfilePicture}>
      <div className={`${classes["profile-box"]} ${classes["profile-row"]}`}>
        <div className={classes["profile-row-left"]}>
          <div className={classes["edit-image"]}>
            {showProfileData ? (
              <div>
                {isLoading ? (
                  <div className={classes["profile-image"]}>Uploading</div>
                ) : (
                    <img
                      src={ showProfileData ? context.updateUsersData.profile.profile_picture : Url}
                      className={classes["profile-image"]}
                      alt={context.updateUsersData.profile.firstname}
                    />
                )}
              </div>
            ) : (
              <img
                src={showProfileData ? dummyprofile : context.updateUsersData.profile.profile_picture || dummyprofile}
                className={classes["profile-image"]}
                alt="Profile"
              />
            )}
            {!showProfileData ? (
              <EditIcon
                className={classes["set-icon"]}
                onClick={handleImageClick}
              />
            ) : (
              ""
            )}
            <label
              htmlFor="profile_picture"
              className={classes["hide-profile-image"]}
            >
              Profile Image
            </label>
            <input
              type="file"
              id="profile_picture"
              name="profile_picture"
              ref={inputRef}
              onInput={(e) => handleImageChange(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <div className={classes["profile-text"]}>
            <h6 className={`${"h6-small"} ${classes["show-profile-name"]}`}>
              {context.updateUsersData.profile.firstname !== "" &&
              context.updateUsersData.profile.lastname !== "" ? (
                <span>
                  {context.updateUsersData.profile.firstname} {context.updateUsersData.profile.lastname}
                </span>
              ) : (
                <span>{context.updateUsersData.full_name}</span>
              )}
            </h6>
            <div className="text-small opacity">
              {context.updateUsersData.email}
            </div>
            <div className="opacity">{context.updateUsersData.role}</div>
          </div>
        </div>
        {showProfileData ? (
          <EditButton
            onClick={editData}
            className={classes["hide-edit-button"]}
            text="Edit"
          />
        ) : (
          <SaveButton type="submit" text="Save" />
        )}
      </div>
    </form>
  );
};

export default ProfileImage;