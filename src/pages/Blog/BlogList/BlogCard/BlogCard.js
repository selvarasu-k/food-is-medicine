import React from 'react';
import Card from '../../../../components/Card/Card';
import classes from './BlogCard.module.css';
import { NavLink } from 'react-router-dom';

const BlogCard = (props) => {
  return (
    <NavLink to="/blog/post" className={classes["blog-post-link"]}>
        <li>
            <Card>
                <div className={classes["blog-card-body"]}>
                    <img src={props.blogpicture} className={classes["blog-card-image"]} alt="blog-card" />
                    <div className={classes["blog-card-content"]}>
                        <h4>How to manage work-life balance at home</h4>
                        <div className={classes["post-content-list"]}>
                            <div className={classes["post-meta-left"]}>
                                <div className="text-small text-primary-1">Lifestyle</div>
                                <div className="text-small">Sep 19, 2019</div>
                            </div>
                            <div className={classes["post-meta-right"]}>
                                <div className="text-small">by</div>
                                <div className="text-small">Pramod Gautam</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </li>
    </NavLink>
  )
}

export default BlogCard;