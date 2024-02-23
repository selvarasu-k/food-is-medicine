import React from 'react';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import newsletter from '../../../Images/Newsletter/newsletter.jpeg';
import classes from './NewsLetter.module.css';
import '../../../index.scss';

const NewsLetter = () => {
  return (
    <section className='section'>
        <Container>
            <div className='row-split-content'>
                <div className='content-width-medium'>
                    <img src={newsletter} className={classes["newsletter"]} alt="News Letter" />
                </div>
                <div className='content-width-small'>
                    <h6 className='subheading text-primary-1'>Our newsletter</h6>
                    <h1>Get great curated articles every week.</h1>
                    <div className='text-large'>Combine sections from Ollie's vast component library and create beautiful, detailed pages.</div>
                    <div className={classes["newsletter-form"]}>
                        <form>
                            <Input type="email" 
                                   label="Newsletter"
                                   id="email"
                                   name="email"
                                   placeholder="Email Address"
                                   className={classes["hide-news-letter"]}/>
                            <Button className="button-width">Subscribe Now</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default NewsLetter;