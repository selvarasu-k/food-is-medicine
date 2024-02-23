import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import PricingBox from './PricingBox/PricingBox';
import Container from '../../components/Container/Container';
import classes from './Pricing.module.css';
import '../../index.scss';
import Footer from '../../components/Footer/Footer';

const Pricing = () => {
  return (
    <>
        <SubHeader heading="Pricing Plans"
                 subheading="Copy and paste any of these multi-purpose sections to your page."
        />
        <section className='section bg-gray-4'>
            <Container>
                <div className={classes["pricing-section-align"]}>
                    <PricingBox className={classes["hide-card-label"]}
                                buttonbg={classes["price-button-bgcolor"]}
                                heading="Basic"
                                price="0"
                                describe="You can read and explore these articles for free and share them with your team."
                                teamlists={["Basic Features","Free Reading Articles","Help & Support","Limited Pdf Files"]}
                    />
                    <PricingBox heading="Professional"
                                price="40"
                                describe="You can create a profile and you are one of the users in Food is medicine."
                                teamlists={["Advanced Features","Reading Articles","Priorty Support","Download Pdf Files"]}
                    />
                    <PricingBox className={classes["hide-card-label"]}
                                buttonbg={classes["price-button-bgcolor"]} 
                                heading="Advanced"
                                price="70"
                                describe="You are one of the Food is Medicine team members and you can create a blog post."
                                teamlists={["Pro Features","Writing Articles","Live chat support","Add Pdf Files"]}
                    />
                </div>
            </Container>
        </section>
        <Footer/>
    </>
  )
}

export default Pricing;