import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import AboutHero from './AboutHero/AboutHero';
import Quotes from './Quotes/Quotes';
import Questions from './Questions/Questions';

const About = () => {

  return (
    <>
        <SubHeader heading="About Us"
                  subheading="As food medicine, Food Medicines cure diseases."
        />
        <AboutHero/>
        <Quotes/>
        <Questions/>
    </>
  )
}

export default About;