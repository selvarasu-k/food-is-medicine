import React from 'react';
import classes from './BlogContent.module.css';

const BlogContent = (props) => {
  return (
    <div className={classes["card-blog"]}>
        <img src={props.avatar} className={classes["card-image-head"]} alt="blog-cards" />
        <div className={classes["card-body"]}>
            <h4>Food medicines that cure diseases</h4>
        </div>
        <div className={classes["card-foot"]}>
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
  )
}

export default BlogContent;