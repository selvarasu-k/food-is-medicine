import React from 'react';
import Container from '../../../../../components/Container/Container';
import posthero from '../../../../../Images/BlogPost/work-life-balance.jpeg';
import avatarsmall from '../../../../../Images/Team/avatar1.png';
import classes from './PostHero.module.css';
import '../../../../../index.scss';

const PostHero = () => {
  return (
    <section className='section'>
        <Container>
            <div className='row-split-content'>
                <div className='content-width-large'>
                    <img src={posthero} className={classes["post-hero-image"]} alt="post-hero"/>
                </div>
                <div className='content-width-medium'>
                    <div className={classes["row-post-center"]}>
                        <div className='text-primary-1'>As food medicine</div>
                        <div className={`${classes["post-text-left-space"]} ${"text-muted"}`}>Sep 19, 2019</div>
                    </div>
                    <h1 className={`${"medium-heading"} ${classes["blog-post-heading"]}`}>How to manage work-life balance at home</h1>
                    <div className={classes["row-post-center"]}>
                        <div className={classes["avatar-with-name"]}>
                            <img src={avatarsmall} className={classes["post-avatar-small"]} alt="post-avatar"/>
                            <div className={`${classes["post-text-left-space"]} ${"text-small"}`}> by Pramod Gautam</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default PostHero;