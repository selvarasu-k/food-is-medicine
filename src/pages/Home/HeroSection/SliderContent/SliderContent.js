import React from 'react';
import classes from './SliderContent.module.css';
import Button from '../../../../components/Button/Button';
import { NavLink } from 'react-router-dom';

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
        {imageSlider.map((slide, index) => (
            <div key={index}
                 className={index === activeIndex ? classes["slides"] + " " + classes["active"] : classes["inactive"]}>
                    <img className={classes['slide-image']} src={slide.urls} alt={slide.title}/>
                    <div className={classes["slide-content"]}>
                        <h2 className={classes['slide-title']}>{slide.title}</h2>
                        <h4 className={classes['slide-text']}>{slide.description}</h4>
                        <NavLink to={slide.category}>
                          <Button>
                                Learn More
                          </Button>
                        </NavLink>
                    </div>
            </div>
        ))}
    </section>
  )
}

export default SliderContent;