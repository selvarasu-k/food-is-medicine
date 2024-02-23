import React from 'react';
import Container from '../../../components/Container/Container';
import Card from '../../../components/Card/Card';
import CategoryContent from './CategoryContent';
import medicine1 from '../../../Images/Categories/fast-food.png';
import medicine2 from '../../../Images/Categories/medicine.png';
import medicine3 from '../../../Images/Categories/natural-ingredients.png';
import classes from './Categories.module.css';
import '../../../index.scss';


const Categories = () => {
  return (
    <section className="section">
        <Container>
            <div className="section-title-wide">
                <h3 className="large-heading">
                    Heaps of useful categories
                </h3>
                <div className="text-large section-subtitle">
                    Combine sections from Ollie's vast component library and create beautiful, detailed pages.
                </div>
            </div>
            <ul className={classes["row-parent-category"]}>
                <li className={classes["row-category"]}> 
                    <Card className={classes["card-transparent"]}>
                        <CategoryContent medicine={medicine1} name="As food medicine"/>
                    </Card>
                </li>
                <li className={classes["row-category"]}>
                    <Card className={classes["card-transparent"]}>
                        <CategoryContent medicine={medicine2} name="Siddha medicine"/>
                    </Card>
                </li>
                <li className={classes["row-category"]}>
                    <Card className={classes["card-transparent"]}>
                        <CategoryContent medicine={medicine3} name="Foods for facial beauty"/>
                    </Card>
                </li>
            </ul>
        </Container>
    </section>
  )
}

export default Categories;