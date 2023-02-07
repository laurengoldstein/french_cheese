import React from "react";
// import "./Home.css";

function LoginRegisterView(props) {
  return (
    <div className="LoginRegisterView">
      <div className="row align-items-start">
        <div className="col">
          <h1>Welcome Back!</h1>
          <h2>Please log in below.</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="inputEmailLogin" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmailLogin"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
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
              Submit
            </button>
          </form>
        </div>
        <div className="col">
          <h1>New to Terroir?</h1>
          <h2>Please register below to get access to some cheesy goodness.</h2>
          <form>
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
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmailRegister"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterView;
