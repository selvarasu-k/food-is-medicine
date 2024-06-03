import React from "react";
import Button from "../../../components/Button/Button";
import "./NewBlog.module.css";
import Container from "../../../components/Container/Container";
import { NavLink } from "react-router-dom";
import classes from "./NewBlog.module.css";

const NewBlog = () => {
  return (
    <section className="section">
      <Container>
        <div className="section-title no-bottom-space">
          <h6 className="subheading text-primary-1">Our Blog</h6>
          <h3 className="large-heading">
          Build a beautiful article in our blog!
          </h3>
          <NavLink to="/food-is-medicine/post/newblogpost" className={classes["create-new-blog-post"]}>
            <Button>+ New Blog Post</Button>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default NewBlog;