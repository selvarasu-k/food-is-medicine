import React from 'react';
import Container from '../../../components/Container/Container';
import avatar1 from '../../../Images/Team/avatar1.png';
import avatar2 from '../../../Images/Team/avatar2.png';
import avatar3 from '../../../Images/Team/avatar3.png';
import avatar4 from '../../../Images/Team/avatar4.png';
import twitter from '../../../Images/Social-Icons/twitter.svg';
import linkedin from '../../../Images/Social-Icons/linkedin.svg';
import instagram from '../../../Images/Social-Icons/instagram.svg';
import classes from './Team.module.css';
import '../../../index.scss';
import Avatar from '../../../components/Avatar/Avatar';
import { NavLink } from 'react-router-dom';

const Team = () => {
  return (
    <section className="section">
        <Container>
            <div className="section-title-wide">
                <h3 className="large-heading">
                    Meet our passionate crew
                </h3>
            </div>
            <div className={classes["team-member-avatar-flex"]}>
                <ul className={classes["team-lists"]}>
                    <NavLink to="/teamlist">
                        <Avatar avatar={avatar1} 
                                twitter={twitter} 
                                linkedin={linkedin} 
                                instagram={instagram}
                                name="Pramod Gautam"
                                place="Nagpur in India"
                        />
                    </NavLink>
                    <NavLink to="/teamlist">
                        <Avatar avatar={avatar2} 
                                twitter={twitter} 
                                linkedin={linkedin} 
                                instagram={instagram}
                                name="Bhavana Nilkanth Nikam"
                                place="Nashik in India"
                        />
                    </NavLink>
                    <NavLink to="/teamlist">
                        <Avatar avatar={avatar3} 
                                twitter={twitter} 
                                linkedin={linkedin} 
                                instagram={instagram}
                                name="Sachin Kale"
                                place="Nagpur in India"
                        />
                    </NavLink>
                    <NavLink to="/teamlist">
                        <Avatar avatar={avatar4} 
                                twitter={twitter} 
                                linkedin={linkedin} 
                                instagram={instagram}
                                name="Binita Kumari"
                                place="Banka in India"
                        />
                    </NavLink>
                </ul>
            </div>
        </Container>
    </section>
  )
}

export default Team;