import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import Container from '../../components/Container/Container';
import Avatar from '../../components/Avatar/Avatar';
import dummyprofile from '../../Images/Team/dummy-profile-pic.jpeg';
import twitter from '../../Images/Social-Icons/twitter.svg';
import linkedin from '../../Images/Social-Icons/linkedin.svg';
import instagram from '../../Images/Social-Icons/instagram.svg';
import classes from './Team.module.css';
import '../../index.scss';
import { NavLink, useOutletContext } from 'react-router-dom';

const Team = () => {

  const context = useOutletContext();

  return (
    <>
      <SubHeader heading="Team"
                 subheading="Thoughts from our friendly team."
      />
      <section className='section bg-gray-4'>
        <Container>
            <div className="section-title-wide">
                <h3 className="large-heading">
                    Meet our passionate crew
                </h3>
            </div>
            <div className={classes["team"]}>
                <ul className={classes["team-items"]}>
                {context.isLoading && <h4>Fetching users data...</h4>}
                {!context.isLoading &&context.usersDataLength && <h4>No users are available...</h4>}
                {!context.usersDataLength && context.filteredUsersData?.map(user => {
                      return (
                          <NavLink to={`${user.id}`} key={user.id}>
                              <Avatar avatar={user.profile.profile_picture !== '' ? user.profile.profile_picture : dummyprofile} 
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
                      )}
                  )}
                </ul>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Team;