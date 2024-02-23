import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import Card from '../Card/Card';
import avatarcircle from '../../Images/Avatar/login.png';
import caretdown from '../../Images/Arrows/icon-caret-down.svg';
import logo from "../../Images/fim-logo.png";
import shopcart from '../../Images/ShopCart/shopping-cart-store.svg';
import classes from './Header.module.css';
import '../../index.scss';
import UserEdit from '../../Images/Profile/UserEdit';
import Help from '../../Images/Profile/Help';
import Logout from '../../Images/Profile/Logout';
import Settings from '../../Images/Profile/Setting';
import Modal from '../Modal/Modal';

const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const [burger_class, setBurgerClass] = useState(`${classes["burger-bar"]} ${classes["unclicked"]}`);
  const [menu_class, setMenuClass] = useState(`${classes["menu"]} ${classes["hidden"]}`);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const dropDownToggle = () => {
            setShowDropdown(showDropdown => !showDropdown);
  }

  const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass(`${classes["burger-bar"]} ${classes["clicked"]}`);
        setMenuClass(`${classes["menu"]} ${classes["visible"]}`);
    }
    else {
        setBurgerClass(`${classes["burger-bar"]} ${classes["unclicked"]}`);
        setMenuClass(`${classes["menu"]} ${classes["hidden"]}`);
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
      <header>
             <div className={classes["nav-block-style"]}>
                <Container className={classes["navigation-container"]}>
                    <div className={classes["header-nav"]}>
                        <div className={classes["website-logo-block"]}>
                            <NavLink to="/food-is-medicine">
                                <img src={logo} className="logo" alt="logo" />
                            </NavLink>
                        </div>
                        <div className={classes["navigation"]}>
                            <Navigation/>
                        </div>
                        <div className={classes.profile}>
                            <div className={classes["login-dropdown-block"]} >
                                <div className={classes["login-dropdown"]}>
                                    <img src={avatarcircle} className={classes["avatar-cirlce"]} alt="avatar-circle" />
                                    <p className={classes["login-name"]}>Login</p>
                                    <img src={caretdown} className={classes["caret-down"]} alt="caret-down" />
                                </div>
                                <Card className={classes["dropdown-menu"]} style={{display: showDropdown ? 'none' : undefined}}>
                                        <h6 className={classes["dropdown-title"]}>FOOD IS MEDICINE</h6>
                                        <div className={classes["dropdown-login"]}>
                                            <NavLink to="/auth" onClick={dropDownToggle}>
                                                <Button>Login</Button>
                                            </NavLink>
                                        </div>
                                        <div className={classes["dropdown-profile"]}>
                                            <NavLink to="/edit">
                                                <UserEdit text="Edit Profile"/>
                                            </NavLink>
                                            <NavLink to="#">
                                                <Settings text="Settings"/>
                                            </NavLink>
                                            <NavLink to="#">
                                                <Help text="Help & Support?"/>
                                            </NavLink>
                                            <NavLink to="#">
                                                <Logout onClick={() => setIsOpen(true)} text="Logout" />
                                                {isOpen && <Modal onClose={() => setIsOpen(false)}
                                                                  text="Are you sure you want to log out?"
                                                                  close="Cancel"
                                                                  okay="Log Out"/>}
                                            </NavLink>
                                        </div>
                                </Card>
                            </div>
                            <div className={classes["shop-cart"]}>
                                <div className={classes["shop-cart-image-block"]}>
                                    <img src={shopcart} className={classes["shop-cart-image"]} alt="shop-cart" />
                                    <div className={classes["shop-cart-count"]}>0</div>
                                </div>
                                <p className={classes["shop-cart-name"]}>Cart</p>
                            </div>
                        </div>
                        <div className={classes["mobile-menu"]}>
                            <div className={classes["burger-menu"]} onClick={updateMenu}>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                            </div>
                        </div>
                        <div className={menu_class}>
                                <Card className={classes["responsive-card"]}>
                                    <Navigation/>
                                </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
   )
}

export default Header;