import React, { useState } from "react";
// import "./Home.css";

function RegistrationForm(props) {
  const EMPTY_REGISTRATION_FORM = {
    email: "",
    password: "",
    username: "",
  };

  const [registrationInput, setRegistrationInput] = useState(
    EMPTY_REGISTRATION_FORM
  );

  function handleRegistrationChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setRegistrationInput((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleRegistrationSubmit(event) {
    event.preventDefault();
    props.registerAccountCb(registrationInput);
  }

  return (
    <div className="RegistrationForm">
      <h1>New to Terroir?</h1>
      <h2>Register to access the cheesy goodness.</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <input
            type="email"
            className="form-control"
            id="inputEmailRegister"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsernameRegister"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordRegister"
          />
        </div>

        <button type="submit" className="btn btn-outline">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
