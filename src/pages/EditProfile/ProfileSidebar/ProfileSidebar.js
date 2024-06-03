import React, { useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import classes from './ProfileSidebar.module.css';
import Modal from '../../../components/Modal/Modal';

const ProfileSidebar = () => {

  const context = useOutletContext();

  const [isOpen, setIsOpen] = useState(false);

  const handlingDeleteProfile = () => {
    context.callDeleteProfile();
    setIsOpen(false);
  }
    
  return (
        <ul className={classes['profile-sidebar']}>
            <li>
                <NavLink to="#" className={classes["active"]}>
                    My Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="#">
                    Security
                </NavLink>
            </li>
            <li>
                <NavLink to="#">
                    Team Member
                </NavLink>
            </li>
            <li>
                <NavLink to="#" onClick={() => setIsOpen(true)} className={classes["delete-account"]}>
                    Delete Account
                </NavLink>
                {isOpen && <Modal onClose={() => setIsOpen(false)}
                                  onClick={handlingDeleteProfile}
                                  text="Are you sure you want to delete your account permanently?"
                                  close="Keep Account"
                                  okay="Yes! Delete It"
                            />}
            </li>
        </ul>
    )
}

export default ProfileSidebar;