import React from 'react';
import Card from '../../../../components/Card/Card';
import dummyimage from '../../../../Images/FeaturedImage/dummy-image.jpeg';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
  return (
        <li>
            <Card>
                <div className={classes["blog-card-body"]}>
                    <img src={props.blogpicture ? props.blogpicture : dummyimage} className={classes["blog-card-image"]} alt="blog-card" />
                    <div className={classes["blog-card-content"]}>
                        <h4>{props.blogtitle}</h4>
                        <div className={classes["post-content-list"]}>
                            <div className={classes["post-meta-left"]}>
                                <div className="text-small text-primary-1">{props.blogcategory}</div>
                                <div className="text-small">{props.blogdate}</div>
                            </div>
                            <div className={classes["post-meta-right"]}>
                                <div className="text-small">by</div>
                                <div className="text-small">{props.author}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </li>
  )
}

export default BlogCard;