import React from 'react'
import "./registration.style.css";
import RegistrationForm from "../../components/registration-form/RegistrationForm.comp";

export const Registration = () => {
  return (
    <div className="registration-page bg-info">
        <div className="mt-5">
        <div className="jumbotron">
            <RegistrationForm />
        </div>
        </div>
    </div>
  )
}


