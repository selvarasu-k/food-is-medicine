import React from 'react';
import classes from './Avatar.module.css';
import '../../index.scss';
import Icons from '../Icons/Icons';

const Avatar = (props) => {
  return (
        <li className={classes["team-listitem"]}>
            <div className={classes["team-member-link-wrapper"]}>
                <div className={classes["team-member-link"]}>
                    <img src={props.avatar} className={classes["team-images"]} alt="avatar-images" />
                    <div className={classes["text-center"]}>
                        <h6 className="h6-small">{props.name}</h6>
                        <div>{props.role}</div>
                    </div>
                </div>
                <ul className={classes["social-icons-list"]}>
                        <Icons icons={props.twitter}/>
                        <Icons icons={props.linkedin}/>
                        <Icons icons={props.instagram}/>
                </ul>
            </div>
        </li>
    )
}

export default Avatar;