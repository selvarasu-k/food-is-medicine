import React from "react";
import { Form, Link, useOutletContext } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import classes from "./Register.module.css";
import "../../../index.scss";
import "react-toastify/dist/ReactToastify.css";
import {
  isFullname,
  isEmail,
  passwordCheck,
  matchPassword,
  isPhoneNumber,
} from "../../../util/validation";

const Register = (props) => {

  const context = useOutletContext();

  const handleInputChange = (identifier, value) => {
    context.setAddUsersData((previousValues) => ({
      ...previousValues,
      [identifier]: value,
    }));
  };

  let nameIsValid,
      emailIsValid,
      passwordIsValid,
      passwordIsMatch,
      phoneIsValid = false;

  nameIsValid = context.addUsersData.full_name !== "" && !isFullname(context.addUsersData.full_name, 4);
  emailIsValid = context.addUsersData.email !== "" && !isEmail(context.addUsersData.email);
  passwordIsValid = context.addUsersData.password !== "" && !passwordCheck(context.addUsersData.password, 6);
  passwordIsMatch = context.addUsersData.confirm_password !== "" && !matchPassword(context.addUsersData.password, context.addUsersData.confirm_password);
  phoneIsValid = context.addUsersData.phone !== "" && !isPhoneNumber(context.addUsersData.phone, 10);

  const handleSubmit = async(event) => {
    event.preventDefault();
    context.callCreateProfile(`?mode=${props.onFormSwitch}`);
  };

  return (
    <>
      <h3 className={classes["form-heading"]}>Register</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Full Name"
          id="full-name"
          name="full-name"
          onChange={(event) =>
            handleInputChange("full_name", event.target.value)
          }
          value={context.addUsersData.full_name}
          error={
            nameIsValid && <p>Use of atleast 4 characters in your fullname</p>
          }
          required
        />
        <Input
          type="email"
          label="Email Address"
          id="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={context.addUsersData.email}
          error={emailIsValid && <p>Enter a valid email address</p>}
          emailerror={context.checkEmail && <p>Email exists</p>}
          required
        />
        <Input
          type="password"
          label="Password"
          id="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={context.addUsersData.password}
          error={
            passwordIsValid && (
              <p>Password must be minimum 6 characters above</p>
            )
          }
          required
        />
        <Input
          type="password"
          label="Confirm Password"
          id="confirm-password"
          name="confirm-password"
          onChange={(event) =>
            handleInputChange("confirm_password", event.target.value)
          }
          value={context.addUsersData.confirm_password}
          error={
            <p style={{ color: passwordIsMatch ? "#068466" : "#e43d2f" }}>
              {passwordIsMatch
                ? "Password match perfectly"
                : context.addUsersData.confirm_password !== ""
                ? "Password didn't match"
                : ""}
            </p>
          }
          required
        />
        <Input
          type="phone"
          label="Phone"
          id="phone"
          name="phone"
          onChange={(event) => handleInputChange("phone", event.target.value)}
          value={context.addUsersData.phone}
          error={phoneIsValid && <p>Phone number must be valid 10 digits</p>}
          required
        />
        <Button className="button-width" buttonType="submit">
          {context.isLoadToSubmitting ? 'Registration is being processed' : "Register"}
        </Button>
      </Form>
      <div className={classes["switch-auth"]}>
        Already have an account?{" "}
        <Link
          to={`?mode=${props.onFormSwitch}`}
          className={classes["auth-switch-button"]}
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;
