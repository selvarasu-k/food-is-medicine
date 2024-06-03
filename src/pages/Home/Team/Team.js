import React from "react";
import Container from "../../../components/Container/Container";
import twitter from "../../../Images/Social-Icons/twitter.svg";
import linkedin from "../../../Images/Social-Icons/linkedin.svg";
import instagram from "../../../Images/Social-Icons/instagram.svg";
import dummyprofile from "../../../Images/Team/dummy-profile-pic.jpeg";
import classes from "./Team.module.css";
import "../../../index.scss";
import Avatar from "../../../components/Avatar/Avatar";
import { NavLink, useOutletContext } from "react-router-dom";

const Team = () => {

  const context = useOutletContext();

  const sortUsersData = context.filteredUsersData?.slice(0,4);

  return (
    <section className="section">
      <Container>
        <div className="section-title-wide">
          <h3 className="large-heading">Meet our passionate crew</h3>
        </div>
        <div className={classes["team-member-avatar-flex"]}>
          <ul className={classes["team-lists"]}>
            {context.isLoading && <h4>Fetching users data...</h4>}
            {context.usersDataLength && <h4>No users are available...</h4>}
            {!context.usersDataLength && sortUsersData?.map((user) => {
                return (
                  <NavLink to={`team/${user.id}`} key={user.id}>
                    <Avatar
                      avatar={
                        user.profile.profile_picture !== ""
                          ? user.profile.profile_picture
                          : dummyprofile
                      }
                      twitter={twitter}
                      linkedin={linkedin}
                      instagram={instagram}
                      name={
                        user.profile.firstname !== "" &&
                        user.profile.lastname !== ""
                          ? user.profile.firstname + " " + user.profile.lastname
                          : user.full_name
                      }
                      role={user.role}
                    />
                  </NavLink>
                );
              })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Team;
