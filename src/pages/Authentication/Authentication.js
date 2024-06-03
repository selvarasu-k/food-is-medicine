import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import authimage from '../../Images/Login/Authentication.jpeg';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import Login from './Login/Login';
import Register from './Register/Register';
import classes from './Authentication.module.css';
import '../../index.scss';
import { authLoader } from '../../util/auth';

const Authentication = () => {

    const navigate = useNavigate();
    
    const authId = authLoader();

    useEffect(() => {
      if (authId) {
        navigate("/food-is-medicine");
      }
    }, [authId, navigate]);

  const [searchParams] = useSearchParams();
  const currentForm = searchParams.get('mode') === 'register';

  return (
    <section className="section bg-gray-4">
        <Container>
            <div className="row-split-content">
                <div className="content-width-small">
                    <h6 className={`${"subheading"} ${"text-primary-1"}`}>Welcome to our great</h6>
                    <h1 className="large-heading">Food is medicine website!</h1>
                    <div className={classes["auth-content"]}>
                        <p>Food is medicine is a traditional (Siddha medicine) medicine in South India. As food medicine, Food Medicines cure diseases.</p>
                        <p>Food as medicine, also known as “food is medicine,” sits at the crossroads of nutrition and healthcare.</p>
                    </div>
                    <img src={authimage} className={classes["auth-image"]} alt="auth-images"/>
                </div>
                <div className="content-width-medium">
                    <Card className="shadow-small">
                        <div className={classes["form-card-body"]}>
                                {
                                    currentForm ? <Register onFormSwitch="login"/> : <Login onFormSwitch="register"/>
                                }
                        </div>
                    </Card>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Authentication;