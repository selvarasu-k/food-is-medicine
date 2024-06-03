import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import NewsLetter from "../NewsLetter/NewsLetter";
import classes from "../PostTags/PostTags.module.css";
import {
  NavLink,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import Card from "../../../components/Card/Card";
import CategoryCard from "./CategoryCard/CategoryCard";
import Tags from "../BlogList/Widget/Tags/Tags";
import { getArticles } from "../../../http";

const PostTags = () => {

  const context = useOutletContext();

  const params = useParams();

  const tags = params.tags;

  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      
      const newItems = context.orderArticle?.filter((newval) =>
        newval.post_tags.includes(tags)
      );
      setItems(newItems);

      try {
        const getArticle = await getArticles("https://json-server-deployment-uepg.onrender.com/articles");

        const allTags = getArticle?.map((tags) => tags.post_tags);

        const mergeTags = allTags.flat();
      
        const filteredTags = mergeTags.filter(
          (item, index) => mergeTags.indexOf(item) === index
        );

        const getTags = filteredTags?.filter((tag) => tag === tags);
        if(getTags.length === 0) {
            return navigate("/food-is-medicine/error");
        }
      } catch (error) {
        window.confirm(error);
      }

    };
    fetchArticles();
  }, [setItems, tags, context.orderArticle, navigate]);

  return (
    <>
      <section className="section">
        <Container>
          <div className="section-title no-bottom-space">
            <h2 className={`${classes["remove-heading-bottom-space"]} ${"medium-heading"}`}>
              <span className="text-muted">Posts tagged:</span> {tags}
            </h2>
          </div>
        </Container>
      </section>
      <section className="section bg-gray-4">
        <Container>
          <div className="section-title-wide">
            <ul className={classes["blog-post-tags"]}>
              {context.filteredTags?.map((tags) => (
                <NavLink key={tags} to={`/food-is-medicine/post-tags/${tags}`}>
                  <Tags name={tags} />
                </NavLink>
              ))}
            </ul>
          </div>
          <ul className={classes["row-parent-blog"]}>
            {items?.map((article) => {
              return (
                <li className={classes["row-blog"]} key={article.id}>
                  <NavLink to={`/food-is-medicine/post/${article.id}`}>
                    <Card className={classes["card-hover"]}>
                      <CategoryCard
                        post_image={article.post_image}
                        post_title={article.post_title}
                        post_category={article.post_categories}
                        author={article.author}
                      />
                    </Card>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default PostTags;