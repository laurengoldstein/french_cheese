import React, { useState } from "react";
// import "./Home.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginChange(event) {
    let { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    props.loginCb(email, password);
  }

  return (
    <div className="LoginForm">
      <h1>Welcome Back!</h1>
      <h2>Please log in below.</h2>
      <form onSubmit={handleLoginSubmit}>
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
            name="email"
            value={email}
            onChange={handleLoginChange}
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
            name="password"
            value={password}
            onChange={handleLoginChange}
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
