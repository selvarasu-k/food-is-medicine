import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import classes from './Login.module.css';
import '../../../index.scss';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
  return (
      <>
        <h3 className={classes["form-heading"]}>Login</h3>
        <form>
            <Input type="email" label="Email" id="email" name="email"/>
            <Input type="password" label="Password" id="password" name="password"/>
            <div className={classes["forgot-password"]}>
                <span>
                    <NavLink to="/reset">
                        Forgot Password?
                    </NavLink>
                </span>
            </div>
            <Button className="button-width">Login</Button>
        </form>
        <div className={classes["switch-auth"]}>
            Don't have an account? <Button onClick={() => props.onFormSwitch('register')} 
                                           className={classes["auth-switch-button"]}>Register
                                    </Button>
        </div>
      </>
  )
}

export default Login;