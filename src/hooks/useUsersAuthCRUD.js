import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authLoader } from '../util/auth';
import { deleteRequest, getIdRequest, patchRequest, postRequest } from '../http';
import { toast } from 'react-toastify';

export function useUsersAuthCRUD(getRequest) {

  const [addUsersData, setAddUsersData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    role: "User",
    profile: {
       firstname: "",
       lastname: "",
       profile_picture: "",
       gender: "",
       country: "",
       about_me: ""
    }
  }); // For Register Component

  const [isLoadToSubmitting, setIsLoadToSubmitting] = useState(false); // For Register Component

  const [checkEmail, setCheckEmail] = useState(false); // For Register Component

  const [updateUsersData, setUpdateUsersData] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: "",
    profile: {
      firstname: "",
      lastname: "",
      gender: "",
      country: "",
      profile_picture: "",
      about_me: "",
    },
  }); // For EditProfile Component
    
  const navigate = useNavigate(); // For Create and Delete Profile
  
  const { pathname } = useLocation(); // For Fetch Data, While When We Change Page Routes

  // Create Profile, Post Request Method

  const callCreateProfile = async (changeMode) => {
    try {
      const getUser = await getRequest('https://json-server-deployment-uepg.onrender.com/users');
      const user = getUser.some((user) => user.email === addUsersData.email);

      if (!user) {
        try {
          setIsLoadToSubmitting(true);
          await postRequest(addUsersData);
          setIsLoadToSubmitting(false);
          toast.success("Registered Successfully...!");
          navigate(changeMode);
        } catch (error) {
          return window.confirm(error);
        }

        setAddUsersData({
          full_name: "",
          email: "",
          password: "",
          confirm_password: "",
          phone: "",
        });
        // console.log(enteredValues);

        setCheckEmail(false);
      } else {
        setCheckEmail(true);
        return;
      }
    } catch (error) {
      return window.confirm(error);
    }
  }

  // Read Profile, Get Request Method

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

          setUpdateUsersData({
            full_name: getUser.full_name,
            email: getUser.email,
            phone: getUser.phone,
            role: getUser.role,
            profile: {
              firstname: getUser.profile.firstname,
              lastname: getUser.profile.lastname,
              gender: getUser.profile.gender,
              country: getUser.profile.country,
              profile_picture: getUser.profile.profile_picture,
              about_me: getUser.profile.about_me,
            },
          });              
        }
      } catch (error) {
        return window.confirm(error);
      }
    };

    fetchUser();
  }, [setUpdateUsersData, getRequest, pathname]);
    
  // Update Profile, Patch Request Method

  const callEditProfile = async () => {
    const updateProfileData = {
      profile: {
        firstname: updateUsersData.profile.firstname,
        lastname: updateUsersData.profile.lastname,
        gender: updateUsersData.profile.gender,
        country: updateUsersData.profile.country,
        profile_picture: updateUsersData.profile.profile_picture,
        about_me: updateUsersData.profile.about_me,
      },
    };

    try {
      const authId = authLoader();
      const getAuthId = authId != null ? authId.toString() : "";
      const getId = await getIdRequest(getAuthId);
      const getUserId = getId != null ? getId : "";

      await patchRequest(
        "https://json-server-deployment-uepg.onrender.com/users/" + getUserId,
        updateProfileData
      );
    } catch (error) {
      return window.confirm(error);
    }
  };
    
    // Delete Profile, Delete Request Method
  
    const callDeleteProfile = async() => {
      try {
        const authId = authLoader();
        const getAuthId = authId != null ? authId.toString() : "";
        const getId = await getIdRequest(getAuthId);
        const getUserId = getId != null ? getId : "";
  
        await deleteRequest(getUserId);
  
        localStorage.removeItem("authentication");
        localStorage.removeItem("userrole");
  
        navigate("/food-is-medicine/auth");
        toast.success("Account deleted successfully");
      } catch (error) {
        return window.confirm(error);
      }
    }

  return {
    // crud users data
    addUsersData,
    setAddUsersData,
    updateUsersData, 
    setUpdateUsersData,
    // call crud functions, while submit form data
    callCreateProfile,
    callEditProfile,
    callDeleteProfile,
    // create profile, load and check exists email
    isLoadToSubmitting,
    checkEmail
  }
}