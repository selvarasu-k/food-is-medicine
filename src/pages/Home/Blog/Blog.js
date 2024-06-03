import React from 'react';
import Container from '../../../components/Container/Container';
import Card from '../../../components/Card/Card';
import BlogContent from './BlogContent';
import classes from './Blog.module.css';
import '../../../index.scss';
import { NavLink, useOutletContext } from 'react-router-dom';

const Blog = () => {

    const context = useOutletContext();
  
    const sortArticlesData = context.orderArticle?.slice(0,3);

  return (
    <section className="section bg-gray-4">
        <Container>
            <div className="section-title-wide">
                <h3 className="large-heading">
                    Thoughts from our team
                </h3>
                <div className="text-large section-subtitle">
                    We were build  beautiful blog articles with our friendly team, you can read and enjoy it!                </div>
                </div>
            <ul className={classes["row-parent-blog"]}>
                {sortArticlesData?.map(article => {
                    return (
                            <li className={classes["row-blog"]} key={article.id}>
                                <NavLink to={`post/${article.id}`}>
                                    <Card className={classes["card-hover"]}>
                                        <BlogContent post_image={article.post_image}
                                                     post_title={article.post_title}
                                                     post_category={article.post_categories}
                                                     author={article.author}
                                        />
                                    </Card>
                                </NavLink>
                            </li>
                    )
                })}
            </ul>
        </Container>
    </section>
  )
}

export default Blog;