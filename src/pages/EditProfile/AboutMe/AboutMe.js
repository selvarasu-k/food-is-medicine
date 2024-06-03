import React, { useEffect, useState } from "react";
import SaveButton from "../../../Images/Profile/SaveButton";
import EditButton from "../../../Images/Profile/EditButton";
import classes from "../EditProfile.module.css";
import { getIdRequest, getRequest } from "../../../http";
import { authLoader } from "../../../util/auth";
import { useOutletContext } from "react-router-dom";

const AboutMe = () => {

  const context = useOutletContext();

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

          const checkProfile = getUser.profile.about_me  !== '';
          setShowProfileData(checkProfile);
          
        }
      } catch (error) {
        return window.confirm(error);
      }
    };
    fetchUser();
  }, [setShowProfileData]);

  const editData = () => {
    setShowProfileData(showProfileData);
  };

  const handlingChangeAboutMe = (event) => {
    context.setUpdateUsersData(prevValues => {
      return {
        ...prevValues,
        profile: {
          ...prevValues.profile,
            [event.target.name]: event.target.value
        }
      }
    })
  }

  const handlingEditAboutUser = (event) => {
    event.preventDefault();
    setShowProfileData(!showProfileData);
    context.callEditProfile();
  };

  return (
    <form onSubmit={handlingEditAboutUser}>
      <div className={classes["profile-box"]}>
        <div className={classes["profile-info-header"]}>
          <div className={classes["profile-box-heading"]}>About Me</div>
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
        <div className={classes["profile-input-block"]}>
          <div className={classes["form-group"]}>
            {showProfileData ? (
              <div className={`${"opacity"}`}>{context.updateUsersData.profile.about_me}</div>
            ) : (
              <>
                <label
                  htmlFor="about_me"
                  className={classes["about-me-form-label"]}
                >
                  About Me
                </label>
                <textarea
                  maxLength="5000"
                  id="about_me"
                  name="about_me"
                  onChange={handlingChangeAboutMe}
                  value={context.updateUsersData.profile.about_me}
                  className={classes["text-area-input"]}
                  required
                ></textarea>
              </>
            )}
            <div className={classes["form-error"]}></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AboutMe;