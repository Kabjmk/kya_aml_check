import React  from 'react';
import "./entry.style.css";
import {LoginForm} from "../../components/login/Login.comp";
import { useState } from "react";
import {ResetPassword} from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setfrmLoad] = useState("login");

  const handleOnChange = e => {
    const {name, value} = e.target;

    //to put the values extracted in the input fields so that they show
    switch(name) {
      case 'email':
        setEmail(value);
        break ;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();//prevent default behaviour of form reseting after submit button is clicked

    if(!email || !password){
      return alert("Fill up all fields");
    }

    //to call api to submit the form
    console.log(email, password);
  };

  const handleOnResetSubmit = e => {
    e.preventDefault();//prevent default behaviour of form reseting after submit button is clicked

    if(!email){
      return alert("Please enter the email");
    }

    //to call api to submit the form
    console.log(email);
  };

  //to switch form to reset password based on click forgot password
  const formSwitcher = frmType => {
    setfrmLoad(frmType);
  };

  return <div className="entry-page bg-info">
    <div className="jumbotron">
      {frmLoad === 'login' && <LoginForm handleOnChange= {handleOnChange}
      handleOnSubmit={handleOnSubmit}
      formSwitcher={formSwitcher}
      email={email}
      pass={password}
      />}

      {frmLoad === 'rest' && <ResetPassword handleOnChange= {handleOnChange}
      handleOnResetSubmit={handleOnResetSubmit}
      formSwitcher={formSwitcher}
      email={email}
      />}

    </div>
  </div>
  
};
