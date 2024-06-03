import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import classes from "./EditProfile.module.css";
import "../../index.scss";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";
import ProfileImage from "./ProfileImage/ProfileImage";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import AboutMe from "./AboutMe/AboutMe";
import { authLoader } from "../../util/auth";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

  const navigate = useNavigate();
  const authId = authLoader();

  useEffect(() => {
    if (!authId) {
      navigate("/food-is-medicine/auth");
    }
  }, [authId, navigate]);

  return (
    <section className="section bg-gray-4">
      <Container>
        <Card className={`${classes["no-shadow"]} ${classes["profile-card"]}`}>
          <ProfileSidebar/>
          <div className={classes["profile-vertical-line"]}></div>
          <div className={classes["profile-main-block"]}>
            <h6 className={classes["profile-heading"]}>My Profile</h6>
            <div className={classes["profile-block"]}>
              <ProfileImage/>
              <PersonalInfo/>
              <AboutMe/>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default EditProfile;