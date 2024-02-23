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
                                   answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                           sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                        />
                        <Accordion question="Why food is medicine"
                                   answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                           sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                        />
                        <Accordion question="What is siddha medicine"
                                   answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                           sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                        />
                        <Accordion question="What is traditional medicine"
                                   answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                           sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                        />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Questions;