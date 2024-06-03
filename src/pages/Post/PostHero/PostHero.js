import React from "react";
import Container from "../../../components/Container/Container";
import posthero from "../../../Images/FeaturedImage/dummy-image.jpeg";
import avatarsmall from "../../../Images/Profile/dummy-profile.jpeg";
import classes from "./PostHero.module.css";
import "../../../index.scss";
import { NavLink, useOutletContext } from "react-router-dom";
import { DateFormat } from "../DateFormat/DateFormat";

const PostHero = (props) => {
  
  const context = useOutletContext();

  const getAuthor = context.filteredUsersData?.filter((users) => {
    return users.full_name === props.article.author;
  });

  return (
    <section className="section">
      <Container>
        <div className="row-split-content">
          <div className="content-width-large">
            <img
              src={
                props.article.post_image ? props.article.post_image : posthero
              }
              className={classes["post-hero-image"]}
              alt="post-hero"
            />
          </div>
          <div className="content-width-medium">
            <div className={classes["row-post-center"]}>
              <NavLink to={`/food-is-medicine/blog-categories/${props.article.post_categories}`}>
                <div className="text-primary-1">
                  {props.article.post_categories}
                </div>
              </NavLink>
              <DateFormat post_date={new Date(props.article.post_date)} />
            </div>
            <h1
              className={`${"medium-heading"} ${classes["blog-post-heading"]}`}
            >
              {props.article.post_title
                ? props.article.post_title
                : "Lorem Ipsum"}
            </h1>
            <div className={classes["row-post-center"]}>
                {getAuthor?.map((author) => {
                  return (
                    <div className={classes["avatar-with-name"]} key={author.id}>
                      <img
                        src={
                          author.profile.profile_picture
                            ? author.profile.profile_picture
                            : avatarsmall
                        }
                        className={classes["post-avatar-small"]}
                        alt="post-avatar"
                      />
                      <div
                        className={`${
                          classes["post-text-left-space"]
                        } ${"text-small"}`}
                      >
                        by {author.full_name ? author.full_name : "unknown"}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PostHero;