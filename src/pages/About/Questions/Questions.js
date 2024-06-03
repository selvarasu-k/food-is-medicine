import React from 'react';
import Container from '../../../components/Container/Container';
import Accordion from '../../../components/Accordion/Accordion';
import questions from '../../../Images/Questions/questions.svg';
import classes from './Questions.module.css';
import '../../../index.scss';

const Questions = () => {
  return (
    <section className={`${"section"} ${classes["query-bg"]}`}>
        <Container>
            <div className="section-title-wide">
                <img src={questions} className={classes["questions-icon"]} alt="Common Questions"/>
                <h3 className='large-heading'>Common Questions</h3>
            </div>
            <div className={classes["questions-row"]}>
                <div className={classes["content-width-extra-large"]}>
                    <div className={classes["flex-rows"]}>
                        <Accordion question="What is food medicine"
                                   answer="Food is medicine is a traditional (Siddha medicine) medicine in South India.
                                           As food medicine, Food Medicines cure diseases."
                        />
                        <Accordion question="Why food is medicine"
                                   answer="Food is Medicine is a concept that reaffirms this connection,
                                           recognizing that access to high-quality nourishment is essential for well-being."
                        />
                        <Accordion question="What is siddha medicine"
                                   answer="Siddha medicine is one of the oldest systems of medicine
                                           (traditional medicine) originating in southern rural India."
                        />
                        <Accordion question="What is traditional medicine"
                                   answer="Traditional medicine comprises medical aspects of traditional
                                           knowledge that developed over generations. The sum total of the knowledge,
                                           skills based on the theories."
                        />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Questions;