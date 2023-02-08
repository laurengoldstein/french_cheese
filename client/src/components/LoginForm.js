import React, { useState } from "react";
// import "./Home.css";

function LoginForm(props) {
  const EMPTY_LOGIN_FORM = {
    email: "",
    password: "",
  };

  const [loginInput, setLoginInput] = useState(EMPTY_LOGIN_FORM);

  function handleLoginChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setLoginInput((state) => ({
      ...state,
      [name]: value,
    }));
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    props.loginCb(loginInput);
  }

  return (
    <div className="LoginForm">
      <h1>Welcome Back!</h1>
      <h2>Please log in below.</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="inputEmailLogin" className="form-label">
            Email address
          </label>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <input
            type="email"
            className="form-control"
            id="inputEmailLogin"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPasswordLogin" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordLogin"
          />
        </div>
        <button type="submit" className="btn btn-outline">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
