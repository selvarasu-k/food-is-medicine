import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import ContactForm from './ContactForm/ContactForm';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
  return (
    <>
        <SubHeader heading="Contact Us"
                subheading="Ask anything about Food is medicine with our friendly team!"
        />
        <ContactMap/>
        <ContactForm/>
    </>
  )
}

export default Contact;