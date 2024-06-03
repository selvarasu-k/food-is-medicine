import React from 'react';
import classes from './Error.module.css';
import '../../index.scss';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import errorimage from '../../Images/Error/error_image.svg';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <Container>
        <div className='row-split-content'>
          <div className='content-width-small'>
            <h3 className='large-heading'>404 - The page was not found.</h3>
            <div className={classes["error-content"]}>Oops! We can’t find the page you are looking for. Try starting from the <NavLink className="text-primary-1" to="/food-is-medicine">homepage</NavLink> or visit our blog to help point you in the right direction.</div>
            <NavLink to="/food-is-medicine">
              <Button>Back to home</Button>
            </NavLink>
          </div>
          <div className='content-width-small'>
            <img src={errorimage} alt="error_image"/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Error;