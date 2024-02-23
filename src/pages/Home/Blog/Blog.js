import React from 'react';
import avatar1 from '../../../Images/Team/avatar1.png';
import avatar2 from '../../../Images/Team/avatar2.png';
import avatar3 from '../../../Images/Team/avatar3.png';
import Container from '../../../components/Container/Container';
import Card from '../../../components/Card/Card';
import BlogContent from './BlogContent';
import classes from './Blog.module.css';
import '../../../index.scss';

const Blog = () => {
  return (
    <section className="section bg-gray-4">
        <Container>
            <div className="section-title-wide">
                <h3 className="large-heading">
                    Thoughts from our team
                </h3>
                <div className="text-large section-subtitle">
                    Combine sections from Ollie's vast component library and create beautiful, detailed pages.
                </div>
            </div>
            <ul className={classes["row-parent-blog"]}>
                <li className={classes["row-blog"]}>
                        <Card className={classes["card-hover"]}>
                            <BlogContent avatar={avatar1}/>
                        </Card>
                </li>
                <li className={classes["row-blog"]}>
                        <Card className={classes["card-hover"]}>
                            <BlogContent avatar={avatar2}/>
                        </Card> 
                </li>
                <li className={classes["row-blog"]}>
                        <Card className={classes["card-hover"]}>
                            <BlogContent avatar={avatar3}/>
                        </Card>
                </li>
            </ul>
        </Container>
    </section>
  )
}

export default Blog;