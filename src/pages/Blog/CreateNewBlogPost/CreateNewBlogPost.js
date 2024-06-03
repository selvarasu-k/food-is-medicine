import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import Input from "../../../components/Input/Input";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import classes from "./CreateNewBlogPost.module.css";
import "../../../index.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
// import JoditEditor from './JoditReactEditor/JoditReactEditor';
import TagsInput from "./TagsInput/TagsInput";
import FeaturedImage from "./FeaturedImage/FeaturedImage";
import { useNavigate, useOutletContext } from "react-router-dom";
import { authLoader } from "../../../util/auth";
import { roleLoader } from "../../../util/roleaccess";

const CreateNewBlogPost = () => {

  const context = useOutletContext();

  const [errors, setErrors] = useState({});

  const handleInputChange = (identifier, value) => {
    context.setArticles((previousValues) => ({
      ...previousValues,
      [identifier]: value,
    }));
  };

  const selectedValue = (name, getOption) => {
    context.setArticles((prevValues) => {
      return {
        ...prevValues,
        [name]: getOption,
      };
    });
  };

  const selectedTags = (tags) => {
    context.setArticles((prevValues) => {
      return {
        ...prevValues,
        post_tags: tags,
      };
    });
  };

  const createNewBlogPost = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if(context.articles.post_title === '') {
      validationErrors.post_title = "Please provide a title";
    }

    if(context.articles.post_body === '') {
      validationErrors.post_body = "Please provide a description";
    }

    if(context.articles.post_categories === '') {
      validationErrors.post_categories = "Please select a category";
    }

    if(context.articles.author === '') {
      validationErrors.author = "Please select an author";
    }

    if(context.articles.post_date === '') {
      validationErrors.post_date = "Please select a date";
    }

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      context.callCreateArticle();
      context.callEditArticle();
    }
  };

  const navigate = useNavigate();

  const handlingBlogCancal = () => {
    navigate("/food-is-medicine/blog");
  }

  const authId = authLoader();
  const roleAccess = roleLoader();

  useEffect(() => {
    if (authId) {
      if (roleAccess === "User") {
        navigate("/food-is-medicine");
      }
    }
    if (!authId) {
      navigate("/food-is-medicine/auth");
    }
  }, [authId, roleAccess, navigate]);

  return (
    <section className="section bg-gray-4">
      <Container>
        <form
          onSubmit={createNewBlogPost}
          onKeyDown={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        >
          <div
            className={`${"row-split-content"} ${
              classes["post-content-align"]
            }`}
          >
            <div className={classes["create-post-center"]}>
              <Card
                className={`${"card-border"} ${classes["card-space"]} ${
                  classes["no-shadow"]
                }`}
              >
                <h3
                  className={`${"medium-heading"} ${classes["post-heading"]}`}
                >
                  {context.editMode ? "Edit Post" : "Create Post"}
                </h3>
                <Input
                  type="text"
                  label="Post Title"
                  id="post_title"
                  name="post_title"
                  placeholder="Enter title here"
                  onChange={(event) =>
                    handleInputChange("post_title", event.target.value)
                  }
                  value={context.articles.post_title}
                  error={errors.post_title && errors.post_title}
                />
                <label
                  htmlFor="post_body"
                  className={classes["post-label-block"]}
                >
                  <span>Post Body</span>
                  <span className={classes["form-label"]}>
                    {errors.post_body && errors.post_body}
                  </span>
                </label>
                {/* <JoditEditor id="post-body" name="post-body"/> */}
                <textarea
                  maxLength="5000"
                  id="post_body"
                  name="post_body"
                  className={classes["text-area-input"]}
                  onChange={(event) =>
                    handleInputChange("post_body", event.target.value)
                  }
                  value={context.articles.post_body}
                ></textarea>
              </Card>
              <Card className={`${"card-border"} ${classes["no-shadow"]}`}>
                <div className={classes["create-post-side-bar"]}>
                  <div className={classes["menu-dropdown"]}>
                    <label
                      htmlFor="post_categories"
                      className={classes["post-label-block"]}
                    >
                      <span>Categories</span>
                      <span className={classes["form-label"]}>
                        {errors.post_categories && errors.post_categories}
                      </span>
                    </label>
                    <Dropdown
                      id="post_categories"
                      name="post_categories"
                      options={[
                        "As food medicine",
                        "Traditional medicine",
                        "Siddha medicine",
                      ]}
                      value={context.articles.post_categories}
                      selectedValue={selectedValue}
                    />
                  </div>
                  <div>
                    <label htmlFor="post_tags">Tags</label>
                    <TagsInput
                      id="post_tags"
                      name="post_tags"
                      postTags={context.articles.post_tags}
                      selectedTags={selectedTags}
                    />
                  </div>
                </div>
              </Card>
            </div>
            <div className={classes["create-post-side-bar-block"]}>
              <Card className={`${"card-border"} ${classes["no-shadow"]}`}>
                <div>
                  <div
                    htmlFor="post_image"
                    className={classes["featured-image-heading"]}
                  >
                    Featured Image
                  </div>
                  <FeaturedImage
                    id="post_image"
                    name="post_image"
                    setArticles={context.setArticles}
                    postImage={context.articles.post_image}
                  />
                </div>
              </Card>
              <Card className={`${"card-border"} ${classes["no-shadow"]}`}>
                <div className={classes["create-post-side-bar"]}>
                  <div className={classes["menu-dropdown"]}>
                    <label
                      htmlFor="author"
                      className={classes["post-label-block"]}
                    >
                      <span>Author</span>
                      <span className={classes["form-label"]}>
                        {errors.author && errors.author}
                      </span>
                    </label>
                    <Dropdown
                      id="author"
                      name="author"
                      options={[
                        "Selvarasu",
                        "Vijaykumar",
                        "Ranjithkumar",
                        "Sheikabdulla",
                      ]}
                      value={context.articles.author}
                      selectedValue={selectedValue}
                    />
                  </div>
                  <Input
                    type="date"
                    label="Published at"
                    id="post_date"
                    name="post_date"
                    onChange={(event) =>
                      handleInputChange("post_date", event.target.value)
                    }
                    value={context.articles.post_date}
                    error={errors.post_date && errors.post_date}
                  />
                </div>
              </Card>
              <div className={classes["post-button"]}>
                <Button onClick={handlingBlogCancal}>Cancel</Button>
                <Button buttonType="submit" className="bg-primary-1">
                  {context.editMode ? "Save" : "Publish"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default CreateNewBlogPost;