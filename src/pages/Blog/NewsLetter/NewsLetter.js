import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import newsletter from '../../../Images/Newsletter/newsletter.jpeg';
import classes from './NewsLetter.module.css';
import '../../../index.scss';
import { postLetter } from '../../../http';
import { toast } from 'react-toastify';

const NewsLetter = () => {

    const initial = {
        email: ''
    };

    const [subscriber, setSubscriber] = useState(initial);

    const handlingInputChange = (mailId) => {
        setSubscriber({email: mailId});
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            await postLetter(subscriber);
            setSubscriber(initial);
            toast.info("Subscribed");
        }catch(error){
            window.confirm(error);
        }
    }

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
                    <div className='text-large'>We were build beautiful blog articles with our friendly team, you can read and enjoy it!</div>
                    <div className={classes["newsletter-form"]}>
                        <form onSubmit={handleSubmit}>
                            <Input type="email" 
                                   label="Newsletter"
                                   id="news-email"
                                   name="news-email"
                                   placeholder="Email Address"
                                   className={classes["hide-news-letter"]}
                                   value={subscriber.email}
                                   onChange={(event) => handlingInputChange(event.target.value)}
                                   required
                            />
                            <Button buttonType="submit" className="button-width">Subscribe Now</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default NewsLetter;