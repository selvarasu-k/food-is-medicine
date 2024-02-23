import React from 'react';
import Container from '../../../components/Container/Container';
import Card from '../../../components/Card/Card';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import contactimage from '../../../Images/Login/Authentication.jpeg';
import classes from './ContactForm.module.css';
import '../../../index.scss';

const ContactForm = () => {
  return (
    <section className="section bg-gray-4">
        <Container>
            <div className="row-split-content">
                <div className="content-width-medium">
                    <Card className="shadow-small">
                        <div className={classes["contact-card-body"]}>
                            <form>
                                <Input type="text" label="Your Name" id="email" name="email"/>
                                <Input type="email" label="Email Address" id="email" name="email"/>
                                <Input type="phone" label="Phone" id="email" name="email"/>
                                <div className={classes["form-group"]}>
                                    <label htmlFor="Message" className={classes["form-label"]}>Messsage</label>
                                    <textarea maxLength="5000"
                                              name="Message"
                                              id="Message"
                                              className={classes["text-area-input"]}>
                                    </textarea>
                                    <div className={classes["form-error"]}></div>
                                </div>
                                <Button className="button-width">Send Message</Button>
                            </form>
                        </div>
                    </Card>
                </div>
                <div className="content-width-small">
                    <h6 className={`${"subheading"} ${"text-primary-1"}`}>Drop us a line</h6>
                    <h1 className={`${"large-heading"} ${"large-heading-line-height"}`}>Ask anything about Food is medicine!</h1>
                    <div className={classes["contact-content"]}>
                        <p>Food is medicine is a traditional (Siddha medicine) medicine in South India. As food medicine, Food Medicines cure diseases.</p>
                    </div>
                    <img src={contactimage} className={classes["contact-image"]} alt="contact-images"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactForm;