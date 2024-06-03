import React, { useEffect } from "react";
import Container from "../../../components/Container/Container";
import BlogCard from "./BlogCard/BlogCard";
import Widget from "./Widget/Widget";
import classes from "./BlogSidebar.module.css";
import "../../../index.scss";
import { NavLink, useLocation, useOutletContext } from "react-router-dom";
import { getArticles } from "../../../http";

const BlogSidebar = () => {

  const context = useOutletContext();

  const { pathname } = useLocation();

  const articleDataLength = context.orderArticle.length === 0;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const getArticle = await getArticles("https://json-server-deployment-uepg.onrender.com/articles");
        context.setArticleData(getArticle);
      } catch (error) {
        window.confirm(error);
      }
    };
    fetchArticles();
  }, [pathname, context, context.setArticleData]);

  return (
    <section className="section bg-gray-4">
      <Container>
        <div className={classes["blog-parent-block"]}>
          <ul className={classes["blog-category-links"]}>
            <NavLink to="/food-is-medicine/blog">
              <li className="text-primary-1">All</li>
            </NavLink>
            {context.blogCategories?.map(val => (
                <NavLink key={val} to={`/food-is-medicine/blog-categories/${val}`}>
                  <li>{val}</li>
                </NavLink>
            ))}
          </ul>
          <div className={classes["sidebar-layout"]}>
            <ul className={classes["blog-post-list"]}>
              {context.isItLoading && <h4>Fetching articles data...</h4>}
              {!context.isItLoading && articleDataLength && <h4>No articles are available...</h4>}
              {!articleDataLength && context.orderArticle?.map((article) => {
                return (
                  <NavLink to={`/food-is-medicine/post/${article.id}`} key={article.id}>
                    <BlogCard
                      blogtitle={article.post_title}
                      blogpicture={article.post_image}
                      blogcategory={article.post_categories}
                      author={article.author}
                      blogdata={article.post_date}
                    />
                  </NavLink>
                );
              })}
            </ul>
            <div className={classes["side-bar"]}>
              <Widget />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogSidebar;