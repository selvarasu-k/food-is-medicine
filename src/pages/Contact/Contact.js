import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import ContactForm from './ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
  return (
    <>
        <SubHeader heading="Contact Us"
                subheading="Copy and paste any of these multi-purpose sections to your page."
        />
        <ContactMap/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default Contact;