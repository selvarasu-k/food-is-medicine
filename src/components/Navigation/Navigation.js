import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {

  return (
        <nav>
            <ul className={classes.list}>
                <li className={classes.listitem}>
                    <NavLink to="/food-is-medicine" 
                                className={({ isActive }) => isActive ? classes.active : undefined}
                                end>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                                className={({ isActive }) => isActive ? classes.active : undefined}>About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/team"
                                className={({ isActive }) => isActive ? classes.active : undefined}>Team
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog"
                                className={({ isActive }) => isActive ? classes.active : undefined}>Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                                className={({ isActive }) => isActive ? classes.active : undefined}>Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default Navigation;