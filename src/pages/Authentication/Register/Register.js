import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import classes from './Register.module.css';
import '../../../index.scss';

const Register = (props) => {
  return (
    <>
        <h3 className={classes["form-heading"]}>Register</h3>
        <form>
            <Input type="text" label="Your Name" id="email" name="email"/>
            <Input type="email" label="Email Address" id="email" name="email"/>
            <Input type="password" label="Password" id="email" name="email"/>
            <Input type="password" label="Confirm Password" id="email" name="email"/>
            <Input type="phone" label="Phone" id="email" name="email"/>
            <Button className="button-width">Register</Button>
        </form>
        <div className={classes["switch-auth"]}>
            Already have an account? <Button onClick={() => props.onFormSwitch('login')} 
                                             className={classes["auth-switch-button"]}>Login
                                      </Button>
        </div>
    </>
  )
}

export default Register;