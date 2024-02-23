import React from 'react';
import Container from '../../../components/Container/Container';
import siddhamedicine from '../../../Images/About/siddha-medicine.jpeg';
import classes from './AboutHero.module.css';
import '../../../index.scss';

const AboutHero = () => {
  return (
    <section className="section">
        <Container>
            <div className={classes["about-row"]}>
                <div className={`${"content-width-small"} ${classes["content-align"]}`}>
                    <h6 className={`${"subheading"} ${"text-primary-1"}`}>Welcome to our great</h6>
                    <h1 className={`${"large-heading"} ${"large-heading-line-height"}`}>Food is medicine in South India!</h1>
                    <div className={classes["about-content"]}>
                        <p>Food is medicine is a traditional (Siddha medicine) medicine in South India. As food medicine, Food Medicines cure diseases.</p>
                        <p>Food as medicine, also known as “food is medicine,” sits at the crossroads of nutrition and healthcare.</p>
                    </div>
                </div>
                <div className={`${"content-width-large"} ${classes["content-align"]}`}>
                    <img src={siddhamedicine} className={classes["about-image"]} alt="Siddha Medicine"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutHero;