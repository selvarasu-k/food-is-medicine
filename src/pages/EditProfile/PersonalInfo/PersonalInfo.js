import React, { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import Dropdown from "../../../components/Dropdown/Dropdown";
import SaveButton from "../../../Images/Profile/SaveButton";
import EditButton from "../../../Images/Profile/EditButton";
import classes from "../EditProfile.module.css";
import { getIdRequest, getRequest } from "../../../http";
import { authLoader } from "../../../util/auth";
import { useOutletContext } from "react-router-dom";

const PersonalInfo = () => {

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

          const checkProfile = getUser.profile.firstname  !== '' && getUser.profile.lastname !== '';
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

  const handlingChangePersonalInfo = (event) => {
    context.setUpdateUsersData((prevValues) => {
      return {
        ...prevValues,
        profile: {
          ...prevValues.profile,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  const selectedValue = (name, getOption) => {
    context.setUpdateUsersData((prevValues) => {
      return {
        ...prevValues,
        profile: {
          ...prevValues.profile,
          [name]: getOption,
        },
      };
    });
  };

  const handlingEditPersonalInfo = (event) => {
    event.preventDefault();
    setShowProfileData(!showProfileData);
    context.callEditProfile();
  };

  return (
    <form onSubmit={handlingEditPersonalInfo}>
      <div className={`${classes["profile-box"]} ${classes["profile-column"]}`}>
        <div className={classes["profile-info-header"]}>
          <div className={classes["profile-box-heading"]}>
            Personal Information
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
        <div className={classes["profile-input-block"]}>
          <div className={classes["input-row"]}>
            {showProfileData ? (
              <div className={classes["input-row-center"]}>
                <div>First Name</div>
                <div className={`${classes["show-profile-data"]} ${"opacity"}`}>
                  {context.updateUsersData.profile.firstname}
                </div>
              </div>
            ) : (
              <Input
                type="text"
                label="First Name"
                name="firstname"
                id="firstname"
                onChange={handlingChangePersonalInfo}
                value={context.updateUsersData.profile.firstname}
                required
              />
            )}
            {showProfileData ? (
              <div className={classes["input-row-center"]}>
                <div>Last Name</div>
                <div className={`${classes["show-profile-data"]} ${"opacity"}`}>
                  {context.updateUsersData.profile.lastname}
                </div>
              </div>
            ) : (
              <Input
                type="text"
                label="Last Name"
                name="lastname"
                id="lastname"
                onChange={handlingChangePersonalInfo}
                value={context.updateUsersData.profile.lastname}
                required
              />
            )}
          </div>
          <div className={classes["input-row"]}>
            {showProfileData ? (
              <div className={classes["input-row-center"]}>
                <div>Email Address</div>
                <div className={`${classes["show-profile-data"]} ${"opacity"}`}>
                  {context.updateUsersData.email}
                </div>
              </div>
            ) : (
              <Input
                type="email"
                label="Email Address"
                name="edit-email"
                id="edit-email"
                value={context.updateUsersData.email}
                title="Read Only"
                disabled={true}
              />
            )}
            {showProfileData ? (
              <div className={classes["input-row-center"]}>
                <div>Phone Number</div>
                <div className={`${classes["show-profile-data"]} ${"opacity"}`}>
                  {context.updateUsersData.phone}
                </div>
              </div>
            ) : (
              <Input
                type="phone"
                label="Phone Number"
                name="edit-phone"
                id="edit-phone"
                value={context.updateUsersData.phone}
                title="Read Only"
                disabled={true}
              />
            )}
          </div>
          <div
            className={`${classes["input-row"]} ${
              !showProfileData ? classes["input-row-height"] : ""
            } ${classes["input-add-space"]}`}
          >
            {showProfileData ? (
              <div className={classes["input-row-center"]}>
                <div>Gender</div>
                <div className={`${classes["show-profile-data"]} ${"opacity"}`}>
                  {context.updateUsersData.profile.gender}
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="gender">Gender</label>
                <Dropdown
                  id="gender"
                  name="gender"
                  options={["Male", "Female"]}
                  value={context.updateUsersData.profile.gender}
                  selectedValue={selectedValue}
                />
              </div>
            )}
            {showProfileData ? (
              <div className={classes["input-row-center"]}>
                <div>Country</div>
                <div className={`${classes["show-profile-data"]} ${"opacity"}`}>
                  {context.updateUsersData.profile.country}
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="country">Country</label>
                <Dropdown
                  id="country"
                  name="country"
                  options={["India", "USA", "Canada"]}
                  value={context.updateUsersData.profile.country}
                  selectedValue={selectedValue}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;