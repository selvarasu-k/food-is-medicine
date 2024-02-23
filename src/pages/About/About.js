import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import AboutHero from './AboutHero/AboutHero';
import Quotes from './Quotes/Quotes';
import Footer from '../../components/Footer/Footer';
import Questions from './Questions/Questions';

const About = () => {
  return (
    <>
        <SubHeader heading="About Us"
                  subheading="Copy and paste any of these multi-purpose sections to your page."
        />
        <AboutHero/>
        <Quotes/>
        <Questions/>
        <Footer/>
    </>
  )
}

export default About;