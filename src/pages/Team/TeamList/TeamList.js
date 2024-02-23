import React from 'react';
import classes from './TeamList.module.css';
import Container from '../../../components/Container/Container';
import avatar1 from '../../../Images/Team/avatar1.png';
import twitter from '../../../Images/Social-Icons/twitter.svg';
import linkedin from '../../../Images/Social-Icons/linkedin.svg';
import instagram from '../../../Images/Social-Icons/instagram.svg';
import Footer from '../../../components/Footer/Footer';
import '../../../index.scss';
import Icons from '../../../components/Icons/Icons';

const TeamList = () => {
  return (
    <>
        <section className='section'>
            <Container>
                <div className={classes["team-member-link-wrapper"]}>
                    <div className={classes["team-member-link"]}>
                        <img src={avatar1} className={classes["team-images"]} alt="avatar-images" />
                        <div className={classes["text-center"]}>
                            <h1 className={classes["team-member-heading"]}>Pramod Gautam</h1>
                            <div>Nagpur in India</div>
                        </div>
                    </div>
                    <div className={`${"content-width-small"} ${classes["team-member-bio"]}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <ul className={classes["social-icons-list"]}>
                            <Icons icons={twitter}/>
                            <Icons icons={linkedin}/>
                            <Icons icons={instagram}/>
                    </ul>
                </div>
            </Container>
        </section>
        <Footer className="bg-gray-4"/>
    </>
  )
}

export default TeamList;