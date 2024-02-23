import React from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import classes from './Modal.module.css';
import Card from '../Card/Card';

const Modal = ({ onClose, text, close, okay }) => {
  return createPortal(
        <div className={classes.modal}>
            <div className={classes["modal-center-align"]}>
                <Card className={classes["modal-card"]}>
                    <h4 className={classes["modal-heading"]}>{text}</h4>
                    <div className={classes["modal-buttons-block"]}>
                        <Button className={classes["modal-button"]} onClick={onClose}>{close}</Button>
                        <Button className={classes["modal-button"]}>{okay}</Button>
                    </div>
                </Card>
            </div>
        </div>,
        document.getElementById("modal")
  )
}

export default Modal;