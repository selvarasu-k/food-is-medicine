import React from 'react';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import classes from './ForgotPassword.module.css';
import '../../../index.scss';

const ForgotPassword = () => {
  return (
    <section className={`${'section bg-gray-4'} ${classes["section-full-height"]}`}>
        <Container>
            <div className={classes["full-screen-content"]}>
                <Card className={`${classes["forgot-password-card"]} ${classes["no-shadow"]} ${"card-border"}`}>
                    <form>
                        <h1 className='medium-heading'>Forgot Password</h1>
                        <div className={classes["reset-subtext"]}>Enter your account email address below.</div>
                        <Input type="email" 
                               label="Forgot Password" 
                               id="reset-password" 
                               placeholder="Email Address" 
                               name="reset-password"
                               className={classes["hide-forgot-password"]}
                        />
                        <Button className={classes["reset-btn-full"]}>Send Reset Link</Button>
                    </form>
                </Card>
            </div>
        </Container>
    </section>
  )
}

export default ForgotPassword;