import React from "react";
import arrowdown from "../../../../Images/Arrows/icon-caret-right.svg";
import dummyprofile from "../../../../Images/Team/dummy-profile-pic.jpeg";
import RecentPost from "./RecentPost/RecentPost";
import classes from "./Widget.module.css";
import Contributors from "./Contributors/Contributors";
import Categories from "./Categories/Categories";
import Tags from "./Tags/Tags";
import { NavLink, useOutletContext } from "react-router-dom";

const Widget = () => {

  const context = useOutletContext();

  const sortUsersData = context.filteredUsersData?.slice(0, 4);

  const sortArticlesData = context.orderArticle?.slice(0,3);

  return (
    <>
      <div className={classes["widget"]}>
        <h5 className={classes["widget-heading"]}>Recent Posts</h5>
        <ul>
          {sortArticlesData?.map((article) => {
            return (
              <NavLink to={`/food-is-medicine/post/${article.id}`} key={article.id}>
                <RecentPost
                  key={article.id}
                  postimage={article.post_image}
                  posttitle={article.post_title}
                />
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className={classes["widget"]}>
        <h5 className={classes["widget-heading"]}>Contributors</h5>
        <ul>
          {sortUsersData?.map((user) => {
            return (
              <NavLink to={`/food-is-medicine/team/${user.id}`} key={user.id}>
                <Contributors
                  team={
                    user.profile.profile_picture !== ""
                      ? user.profile.profile_picture
                      : dummyprofile
                  }
                  teammember={
                    user.profile.firstname !== "" &&
                    user.profile.lastname !== ""
                      ? user.profile.firstname + " " + user.profile.lastname
                      : user.full_name
                  }
                  posting={user.role}
                />
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className={classes["widget"]}>
        <h5 className={classes["widget-heading"]}>Categories</h5>
        <ul className={classes["sidebar-categories"]}>
          {context.blogCategories?.map(category => (
            <NavLink key={category} to={`/food-is-medicine/blog-categories/${category}`}>
              <Categories title={category} arrow={arrowdown} />
            </NavLink>
          ))}
        </ul>
      </div>
      <div className={classes["widget"]}>
        <h5 className={classes["widget-heading"]}>Tags</h5>
        <ul className={classes["tags-block"]}>
          {context.filteredTags?.map((tags) => (
            <NavLink key={tags} to={`/food-is-medicine/post-tags/${tags}`}>
              <Tags name={tags} />
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Widget;