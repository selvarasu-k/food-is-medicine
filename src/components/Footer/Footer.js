import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import Icons from '../Icons/Icons';
import logo from '../../Images/fim-logo.png';
import twitter from '../../Images/Social-Icons/twitter.svg';
import linkedin from '../../Images/Social-Icons/linkedin.svg';
import instagram from '../../Images/Social-Icons/instagram.svg';
import dribbble from '../../Images/Social-Icons/dribbble.svg';
import facebook from '../../Images/Social-Icons/facebook.svg';
import classes from './Footer.module.css';
import '../../index.scss';
import BackToTopButton from './BackToTopButton/BackToTopButton';

const Footer = () => {
  return (
    <footer className='bg-gray-3'>
        <Container>
            <div className={classes["footer-row-3"]}>
                <div className={classes["footer-logo-block"]}>
                    <div className={classes["footer-logo"]}>
                        <NavLink to="">
                            <img src={logo} className="logo" alt="logo" />
                        </NavLink>
                    </div>
                    <p className="text-large">As food medicine, Food Medicines cure diseases.</p>
                </div>
                <ul className={classes["footer-social-icons"]}>
                    <Icons icons={twitter}/>
                    <Icons icons={linkedin}/>
                    <Icons icons={instagram}/>
                    <Icons icons={dribbble}/>
                    <Icons icons={facebook}/>
                </ul>
            </div>
            <div className={classes["footer-row-3-lower"]}>
                <nav>
                        <ul className={`${classes["list"]} ${classes["footer-links-align"]}`}>
                            <li className={classes.listitem}>
                                <NavLink to="">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="team">Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-small">
                        <div>© Company • Powered by <NavLink to="#">Food is medicine</NavLink></div>
                    </div>
            </div>
        </Container>
        <BackToTopButton/>
    </footer>
  )
}

export default Footer;