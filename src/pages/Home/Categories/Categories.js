import React from 'react';
import Container from '../../../components/Container/Container';
import Card from '../../../components/Card/Card';
import CategoryContent from './CategoryContent';
import medicine1 from '../../../Images/Categories/fast-food.png';
import medicine2 from '../../../Images/Categories/medicine.png';
import medicine3 from '../../../Images/Categories/natural-ingredients.png';
import classes from './Categories.module.css';
import '../../../index.scss';
import { NavLink } from 'react-router-dom';


const Categories = () => {
  return (
    <section className="section">
        <Container>
            <div className="section-title-wide">
                <h3 className="large-heading">
                    Heaps of useful categories
                </h3>
                <div className="text-large section-subtitle">
                    We were build beautiful blog categories with our friendly team, you can read and enjoy it!
                </div>
            </div>
            <ul className={classes["row-parent-category"]}>
                <li className={classes["row-category"]}> 
                    <NavLink to="/food-is-medicine/blog-categories/As food medicine">
                        <Card className={classes["card-transparent"]}>
                            <CategoryContent medicine={medicine1} name="As food medicine"/>
                        </Card>
                    </NavLink>
                </li>
                <li className={classes["row-category"]}>
                    <NavLink to="/food-is-medicine/blog-categories/Traditional medicine">
                        <Card className={classes["card-transparent"]}>
                            <CategoryContent medicine={medicine3} name="Traditional medicine"/>
                        </Card>
                    </NavLink>
                </li>
                <li className={classes["row-category"]}>
                    <NavLink to="/food-is-medicine/blog-categories/Siddha medicine">
                        <Card className={classes["card-transparent"]}>
                            <CategoryContent medicine={medicine2} name="Siddha medicine"/>
                        </Card>
                    </NavLink>
                </li>
            </ul>
        </Container>
    </section>
  )
}

export default Categories;