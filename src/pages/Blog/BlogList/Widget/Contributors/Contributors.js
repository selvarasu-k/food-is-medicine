import React from 'react';
import classes from './Contributors.module.css';
import '../../../../../index.scss';

const Contributors = (props) => {
  return (
    <li className={classes["contributors"]}>
        <img src={props.team} className={classes["contributor-team"]} alt="contributor"/>
        <div className={classes["contributor-bio"]}>
            <div>{props.teammember}</div>
            <div className={`${'text-small'} ${classes["text-muted"]}`}>{props.posting}</div>
        </div>
    </li>
  )
}

export default Contributors;