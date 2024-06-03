import React, { useState } from "react";
import NewsLetter from "../Blog/NewsLetter/NewsLetter";
import PostHero from "./PostHero/PostHero";
import Article from "./Article/Article";
import Button from "../../components/Button/Button";
import classes from "./Post.module.css";
import Container from "../../components/Container/Container";
import Modal from "../../components/Modal/Modal";
import { NavLink, useNavigate, useOutletContext, useParams } from "react-router-dom";
import Tags from "../Blog/BlogList/Widget/Tags/Tags";

const Post = () => {

  const context = useOutletContext();

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const params = useParams();

  const getId = params.postId;

  const handleEditArticle = () => {
    navigate(`/food-is-medicine/post/${getId}/edit`);
  }

  const handleDeleteArticle = () => {
    context.callDeleteArticle();
    setIsOpen(false);
  }

  return (
    <>
      <PostHero article={context.articles}/>
      <Article
        article={context.articles.post_body}
      />
      <section className={`${classes["post-actions-row"]} ${classes["add-tags-line"]}`}>
        <Container>
          <div className={classes["tags-parent-block"]}>
            <div className={classes["tags-parent-name"]}>Tags:</div>
            <div>
              <ul className={classes["tags-parent"]}>
                {context.articles.post_tags && context.articles.post_tags?.map((tags) => (
                  <NavLink key={tags} to={`/food-is-medicine/post-tags/${tags}`}>
                    <Tags name={tags}/>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      {context.haveedit && <section className={`${classes["post-actions-row"]} ${"bg-gray-3"}`}>
        <Container>
          <div className={classes["post-actions"]}>
            <Button onClick={handleEditArticle} className={classes["post-edit-button"]}>Edit</Button>
            <Button onClick={() => setIsOpen(true)} className={classes["post-delete-button"]}>Delete</Button>
            {isOpen && <Modal onClose={() => setIsOpen(false)}
                              onClick={handleDeleteArticle}
                              text="Are you sure you want to delete this post?"
                              close="Cancel"
                              okay="Delete Now"
                        />}
          </div>
        </Container>
      </section>}
      <NewsLetter />
    </>
  );
};

export default Post;