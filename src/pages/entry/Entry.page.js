import React  from 'react';
import "./entry.style.css";
import {LoginForm} from "../../components/login/Login.comp";
import { useState } from "react";
import {ResetPassword} from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [frmLoad, setfrmLoad] = useState("login");

  const handleOnResetSubmit = e => {
    e.preventDefault();//prevent default behaviour of form reseting after submit button is clicked

  };

  //to switch form to reset password based on click forgot password
  const formSwitcher = frmType => {
    setfrmLoad(frmType);
  };

  return <div className="entry-page bg-info">
    <div className="jumbotron">
      {frmLoad === 'login' && <LoginForm 
      formSwitcher={formSwitcher}
      />}

      {frmLoad === 'rest' && <ResetPassword 
      //handleOnChange= {handleOnChange}
      handleOnResetSubmit={handleOnResetSubmit}
      formSwitcher={formSwitcher}
      //email={email}
      />}

    </div>
  </div>
  
};
