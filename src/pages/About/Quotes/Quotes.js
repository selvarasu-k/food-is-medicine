import React from 'react';
import Container from '../../../components/Container/Container';
import poeter from '../../../Images/Quotes/thiruvalluvar.jpeg';
import classes from './Quotes.module.css';
import '../../../index.scss';

const Quotes = () => {
  return (
    <section className="section bg-gray-4">
        <Container>
            <div className={classes["row-quotes"]}>
                <div className={classes["content-width-extra-large"]}>
                    <div className={classes["quotes-block"]}>
                        <h3 className={`${"text-center"} ${classes["quotes-text"]}`}>"is a thirukural about health which says once when we complete
                             our food mean after it completely digested only further we take food,
                             if we follow this criteria mean we don't need any medicine."
                        </h3>
                    </div>
                    <div className={classes["quotes-poeter"]}>
                        <img src={poeter} className={classes["poeter"]} alt="Thiruvalluvar" />
                        <div className={classes["about-poeter"]}>
                            <h3 className={`${"text-primary-1"} ${classes["poeter-name"]}`}>Thiruvalluvar</h3>
                            <i>Thirukkural</i>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Quotes;