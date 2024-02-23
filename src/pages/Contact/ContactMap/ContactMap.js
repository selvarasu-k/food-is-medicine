import React from 'react';
import Container from '../../../components/Container/Container';
import classes from './ContactMap.module.css';
import '../../../index.scss';

const ContactMap = () => {
  return (
    <section className="section">
        <Container>
            <div className={classes["contact-map-row"]}>
                <div className="content-width-small">
                    <h1 className="large-heading-line-height">Contact our friendly team</h1>
                    <ul className={classes["contact-lists"]}>
                        <li>
                            <h6 className={'h6-small text-primary-1'}>Visit Us</h6>
                            <div>3/13 MK Street, BN Patty</div>
                            <div>Rasipuram, Namakkal, TamilNadu - 637 412.</div>
                        </li>
                        <li>
                            <h6 className='h6-small text-primary-1'>Contact Us</h6>
                            <div>9843305721</div>
                            <div className='text-primary-1'>selvanewversion@gmail.com</div>
                        </li>
                        <li>
                            <h6 className='h6-small text-primary-1'>Request Demo</h6>
                            <div>Get a personal demonstration of the software by</div>
                            <div className='text-primary-1'>requesting a demo.</div>
                        </li>
                    </ul>
                </div>
                <div className="content-width-large">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7821.520650694941!2d78.20454604166677!3d11.424934371343634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babc183c0974ccd%3A0x9cd48d78317e4a40!2sBodinayakanpatty%2C%20Tamil%20Nadu%20637412!5e0!3m2!1sen!2sin!4v1707069813580!5m2!1sen!2sin"
                            id="contact"
                            title="contact"
                            width="600" 
                            height="450" 
                            style={{ border:0 }}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactMap;