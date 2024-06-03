import React from "react";
import classes from "../PostHero/PostHero.module.css";

export const DateFormat = (props) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", 
    "Jul","Aug", "Sep", "Oct", "Nov","Dec"];

    const date = props.post_date.getDate();
    const month = months[props.post_date.getMonth()];
    const year = props.post_date.getFullYear();

  return (
    <div className={`${classes["post-text-left-space"]} ${"text-muted"}`}>
      {month} {date}, {year}
    </div>
  );
};
