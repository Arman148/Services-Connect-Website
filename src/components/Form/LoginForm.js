import React, { useState } from "react";
import "./LoginForm.css";
import Input from "../input/input";
import Button from "../Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formcss: {
    width: "100%",
    maxWidth: "360px"
  },
  "@media only screen and (max-width: 1200px)": {
    formcss: {
      width: "100%",
      maxWidth: "320px"
    }
  }
  
}));


function LoginForm(props) {
  const classes = useStyles();
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();
    if (formState.email && formState.password) {
      props.onLogin(formState);
    } else {
      alert("Please fill in all fields!");
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <div className="card ">
      <form onSubmit={handleSubmit} className={classes.formcss}>
        <p className="signcontinue">Sign in to continue</p>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Input
            onChange={handleChange}
            className="login-form_input"
            type="email"
            value={formState.email}
            name="email"
            inputStyle="input--borderRounded--outline"
            inputSize="input--small"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <Input
            onChange={handleChange}
            type="password"
            value={formState.password}
            name="password"
            className="login-form_input"
            inputStyle="input--borderRounded--outline"
            inputSize="input--small"
          />
          <div className="link_pass">
            <a id="emailHelp" className="form-text text-muted" href="">
              Forgot your password?
            </a>
          </div>
        </div>
        <Button
          buttonStyle="SIGN"
          disabled={props.isLoading}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <small className="small">Don’t have an account?<a href="">Sign Up</a> </small>
        
      </form>
    </div>
  );
}

export default LoginForm;
