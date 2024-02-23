import React, { useEffect, useState } from 'react';
import classes from './Slider.module.css';
import SliderContent from '../SliderContent/SliderContent';
import Arrows from '../Arrows/Arrows';
import Dots from '../Dots/Dots';
import imageSlider from '../ImageSlider';
import '../../../../index.scss';


const len = imageSlider.length - 1;

const Slider = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0: activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);;
  }, [activeIndex]);

  return (
    <div className={`${classes["slider-container"]} ${"bg-gray-4"}`}>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
        <Arrows 
            prevSlide={() => 
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
            nextSlide={() => 
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
        />
        <Dots activeindex={activeIndex} 
              imageSlider={imageSlider} 
              onClick={(activeIndex) => setActiveIndex(activeIndex)}
        />
    </div>
  )
}

export default Slider;