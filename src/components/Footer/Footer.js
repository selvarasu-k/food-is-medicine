import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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

const Footer = (props) => {
  return (
    <footer className={props.className}>
        <Container>
            <div className={classes["footer-row-3"]}>
                <div className={classes["footer-logo-block"]}>
                    <div className={classes["footer-logo"]}>
                        <NavLink to="/">
                            <img src={logo} className="logo" alt="logo" />
                        </NavLink>
                    </div>
                    <p className="text-large">Build your website with over 100 interface blocks.</p>
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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/team">Team</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-small">
                        <div>© Company • Powered by <Link to="#">Food is medicine</Link></div>
                    </div>
            </div>
        </Container>
        <BackToTopButton/>
    </footer>
  )
}

export default Footer;