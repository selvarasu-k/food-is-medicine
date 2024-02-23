import React from 'react';
import Container from '../../../../../components/Container/Container';
import '../../../../../index.scss';
import { NavLink } from 'react-router-dom';
import classes from './Article.module.css';
import Button from '../../../../../components/Button/Button';

const Article = (props) => {
    return (
        <section className='section bg-gray-4'>
            <Container>
                <div className='row-split-content'>
                    <div className={`${'content-width-large'} ${classes["article-row-align"]}`}>
                        <p>
                            {props.article}
                        </p>
                        <NavLink to="/pricing">
                            <Button className={classes["read-more-link"]}>Read More</Button>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    )
  }

export default Article;