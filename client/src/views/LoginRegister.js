import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

function LoginRegisterView(props) {
  return (
    <div className="LoginRegisterView">
      <div className="row gx-5">
        <div className="col ms-5">
          <LoginForm />
        </div>
        <div className="col me-5">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterView;
