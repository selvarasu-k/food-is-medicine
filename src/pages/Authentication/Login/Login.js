import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import classes from "./Login.module.css";
import "../../../index.scss";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { getRequest } from "../../../http";

const Login = (props) => {
  
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState({
    emailIsValid: false,
    passwordIsValid: false,
  });

  const handleInputChange = (identifier, value) => {
    setEnteredValues((previousValue) => ({
      ...previousValue,
      [identifier]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const checkEmail = enteredValues.email !== "" ? "?email=" + enteredValues.email : "";
    try {
      setIsLoading(true);
      const getUser = await getRequest(
        "https://json-server-deployment-uepg.onrender.com/users" + checkEmail
      );
      setIsLoading(false);
      let userobj = getUser[0];
      const user =
        userobj.email === enteredValues.email &&
        userobj.password === enteredValues.password;

      if (user) {
        localStorage.setItem("authentication", enteredValues.email);
        localStorage.setItem("userrole", userobj.role);
        navigate("/food-is-medicine");

        setEnteredValues({
          email: "",
          password: "",
        });
        setError({
          emailIsValid: false,
          passwordIsValid: false,
        });

        toast.success("Login Successfully...!");
      } else {
        setError({
          emailIsValid: true,
          passwordIsValid: true,
        });
        return;
      }
    } catch (error) {
      setError({
        emailIsValid: true,
        passwordIsValid: true,
      });
      return toast.error(error);
    }
    // console.log(enteredValues);
  };

  return (
    <>
      <h3 className={classes["form-heading"]}>Login</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          id="login-email"
          name="login-email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={
            error.emailIsValid && error.passwordIsValid ? (
              <p>Invalid email or password</p>
            ) : (
              " "
            )
          }
        />
        <Input
          type="password"
          label="Password"
          id="login-password"
          name="login-password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
        />
        <div className={classes["forgot-password"]}>
          <span>
            <NavLink to="reset">Forgot Password?</NavLink>
          </span>
        </div>
        <Button buttonType="submit" className="button-width">
          {isLoading ? "Login processing" : "Login"}
        </Button>
      </Form>
      <div className={classes["switch-auth"]}>
        Don't have an account?{" "}
        <Link
          to={`?mode=${props.onFormSwitch}`}
          className={classes["auth-switch-button"]}
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default Login;
