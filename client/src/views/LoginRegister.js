import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

function LoginRegisterView(props) {
  return (
    <div className="LoginRegisterView">
      <div className="row align-items-start">
        <div className="col">
          <LoginForm />
        </div>
        <div className="col">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterView;
