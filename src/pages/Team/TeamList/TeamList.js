import React, { useEffect, useState } from "react";
import classes from "./TeamList.module.css";
import Container from "../../../components/Container/Container";
import dummyprofile from "../../../Images/Team/dummy-profile-pic.jpeg";
import twitter from "../../../Images/Social-Icons/twitter.svg";
import linkedin from "../../../Images/Social-Icons/linkedin.svg";
import instagram from "../../../Images/Social-Icons/instagram.svg";
import "../../../index.scss";
import Icons from "../../../components/Icons/Icons";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../../http";

const TeamList = () => {
  
  const params = useParams();
  
  const getId = params.teamId;

  const [usersData, setUsersData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const GetUser = async () => {
      try {
        const getUser = await getRequest(
          "https://json-server-deployment-uepg.onrender.com/users/" + getId
        );
        setUsersData(getUser);
      } catch (error) {
        navigate("/food-is-medicine/error");
      }
    };

    GetUser();
  }, [getId, setUsersData, navigate]);

  return (
    <section className="section">
      <Container>
        <div className={classes["team-member-link-wrapper"]}>
          <div className={classes["team-member-link"]}>
            <img
              src={
                usersData
                  ? usersData.profile.profile_picture !== ""
                    ? usersData.profile.profile_picture
                    : dummyprofile
                  : dummyprofile
              }
              className={classes["team-images"]}
              alt="avatar-images"
            />
            <div className={classes["text-center"]}>
              <h1 className={classes["team-member-heading"]}>
                {usersData &&
                usersData.profile.firstname !== "" &&
                usersData.profile.lastname !== ""
                  ? usersData.profile.firstname +
                    " " +
                    usersData.profile.lastname
                  : usersData && usersData.full_name}
              </h1>
              <div>{usersData && usersData.role}</div>
            </div>
          </div>
          <div
            className={`${"content-width-small"} ${classes["team-member-bio"]}`}
          >
            {usersData && usersData.profile.about_me !== ""
              ? usersData.profile.about_me
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          </div>
          <ul className={classes["social-icons-list"]}>
            <Icons icons={twitter} />
            <Icons icons={linkedin} />
            <Icons icons={instagram} />
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default TeamList;