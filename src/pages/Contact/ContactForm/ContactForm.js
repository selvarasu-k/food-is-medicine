import React, { useState } from "react";
import Container from "../../../components/Container/Container";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import contactimage from "../../../Images/Login/Authentication.jpeg";
import classes from "./ContactForm.module.css";
import "../../../index.scss";
import { toast } from "react-toastify";
import { postContact } from "../../../http";

const ContactForm = () => {

    const initialValues = {
        contact_name: "",
        contact_email: "",
        contact_phone: "",
        message: ""
    };

    const [contact, setContact] = useState(initialValues);

    const handleInputChange = (identifier, values) => {
        setContact((previousValues) => ({
            ...previousValues, 
            [identifier]: values
        }));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            await postContact(contact);
            setContact(initialValues);
            toast.info("Your details are submitted");
        }catch(error){
            window.confirm(error);
        }
    }

  return (
    <section className="section bg-gray-4">
      <Container>
        <div className="row-split-content">
          <div className="content-width-medium">
            <Card className="shadow-small">
              <div className={classes["contact-card-body"]}>
                <form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    label="Your Name"
                    id="contact_name"
                    name="contact_name"
                    value={contact.contact_name}
                    onChange={(event) => handleInputChange("contact_name", event.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    label="Email Address"
                    id="contact_email"
                    name="contact_email"
                    value={contact.contact_email}
                    onChange={(event) => handleInputChange("contact_email", event.target.value)}
                    required
                  />
                  <Input
                    type="phone"
                    label="Phone"
                    id="contact_phone"
                    name="contact_phone"
                    value={contact.contact_phone}
                    onChange={(event) => handleInputChange("contact_phone", event.target.value)}
                    required
                  />
                  <div className={classes["form-group"]}>
                    <label htmlFor="message" className={classes["form-label"]}>
                      Messsage
                    </label>
                    <textarea
                      maxLength="5000"
                      name="message"
                      id="message"
                      className={classes["text-area-input"]}
                      value={contact.message}
                      onChange={(event) => handleInputChange("message", event.target.value)}
                      required
                    ></textarea>
                    <div className={classes["form-error"]}></div>
                  </div>
                  <Button buttonType="submit" className="button-width">Send Message</Button>
                </form>
              </div>
            </Card>
          </div>
          <div className="content-width-small">
            <h6 className={`${"subheading"} ${"text-primary-1"}`}>
              Drop us a line
            </h6>
            <h1 className={`${"large-heading"} ${"large-heading-line-height"}`}>
              Ask anything about Food is medicine!
            </h1>
            <div className={classes["contact-content"]}>
              <p>
                Food is medicine is a traditional (Siddha medicine) medicine in
                South India. As food medicine, Food Medicines cure diseases.
              </p>
            </div>
            <img
              src={contactimage}
              className={classes["contact-image"]}
              alt="contact-images"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;