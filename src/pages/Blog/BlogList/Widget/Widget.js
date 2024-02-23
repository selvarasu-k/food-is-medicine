import React from 'react';
import image1 from '../../../../Images/Team/avatar1.png';
import image2 from '../../../../Images/Team/avatar2.png';
import image3 from '../../../../Images/Team/avatar3.png';
import image4 from '../../../../Images/Team/avatar4.png';
import arrowdown from '../../../../Images/Arrows/icon-caret-right.svg';
import RecentPost from './RecentPost/RecentPost';
import classes from './Widget.module.css';
import Contributors from './Contributors/Contributors';
import Categories from './Categories/Categories';
import Tags from './Tags/Tags';

const Widget = () => {
  return (
    <>
        <div className={classes["widget"]}>
            <h5 className={classes["widget-heading"]}>Recent Posts</h5>
            <ul>
                <RecentPost postimage={image1} posttitle="How to manage work-life balance at home"/>
                <RecentPost postimage={image2} posttitle="Building the right team from the start"/>
                <RecentPost postimage={image3} posttitle="Attracting and securing top-notch talent"/>
            </ul>
        </div>
        <div className={classes["widget"]}>
            <h5 className={classes["widget-heading"]}>Contributors</h5>
            <ul>
                <Contributors team={image1} teammember="Pramod Gautam" posting="Developer"/>
                <Contributors team={image2} teammember="Bhavana Nilkanth Nikam" posting="Customer Support"/>
                <Contributors team={image3} teammember="Sachin Kale" posting="Co-Founder, Developer"/>
                <Contributors team={image4} teammember="Binita Kumari" posting="Founder, CEO"/>
            </ul>
        </div>
        <div className={classes["widget"]}>
            <h5 className={classes["widget-heading"]}>Categories</h5>
            <ul className={classes["sidebar-categories"]}>
                <Categories title="As food medicine" arrow={arrowdown}/>
                <Categories title="Siddha medicine" arrow={arrowdown}/>
                <Categories title="Foods for facial beauty" arrow={arrowdown}/>
            </ul>
        </div>
        <div className={classes["widget"]}>
            <h5 className={classes["widget-heading"]}>Tags</h5>
            <ul className={classes["tags-block"]}>
                <Tags name="Medicine"/>
                <Tags name="Food"/>
                <Tags name="Siddha Medicine"/>
                <Tags name="Traditional Medicine"/>
                <Tags name="Folk Medicine"/>
            </ul>
        </div>
    </>
  )
}

export default Widget;