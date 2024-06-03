import React, { useEffect, useState } from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import Container from "../../../components/Container/Container";
import "../../../index.scss";
import classes from "../BlogCategories/BlogCategories.module.css";
import {
  NavLink,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import Card from "../../../components/Card/Card";
import CategoryCard from "./CategoryCard/CategoryCard";
import { getRequest } from "../../../http";

const BlogCategories = () => {

  const context = useOutletContext();

  const params = useParams();

  const category = params.category;

  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {

      const newItems = context.orderArticle?.filter(
        (newval) => newval.post_categories === category
      );
      setItems(newItems);

      try {
        const getCat = await getRequest(
          "https://json-server-deployment-uepg.onrender.com/articles?post_categories=" + category
        );

        if(getCat.length === 0) {
           navigate("/food-is-medicine/error");
        }
        
      } catch (error) {
        navigate("/food-is-medicine/error");
      }

    };

    fetchArticles();
  }, [setItems, context.orderArticle, category, navigate]);

  return (
    <>
      <section className="section">
        <Container>
          <div className="section-title no-bottom-space">
            <h3 className="large-heading">{category}</h3>
          </div>
        </Container>
      </section>
      <section className="section bg-gray-4">
        <Container>
          <div className="section-title-wide">
            <ul className={classes["blog-category-tabs"]}>
              <NavLink to="/food-is-medicine/blog">
                <li className="text-primary-1">View All</li>
              </NavLink>
              {context.blogCategories?.map((val) => (
                <NavLink
                  key={val}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  to={`/food-is-medicine/blog-categories/${val}`}
                >
                  <li>{val}</li>
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

export default BlogCategories;