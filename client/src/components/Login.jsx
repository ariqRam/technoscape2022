import { useState } from "react";
import { Navigate } from "react-router-dom";

import Axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function login() {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (!res.data) {
        setMessage("Invalid email or password");
      } else {
        setLoggedIn(true);
        console.log("successfully logged in");
      }
    });
  }

  return (
    <>
      <form className="loginInput">
        <h1 className="mb-4">Login</h1>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            onChange={onEmailChange}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            onChange={onPasswordChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={login}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member?{" "}
            <span
              className="loginRegister"
              onClick={() => props.onClick(false)}
            >
              Register
            </span>
          </p>
          <p className="text-danger">{message ? message : ""}</p>
          {/* {loggedIn ? <Navigate push to="/" /> : null} */}
        </div>
      </form>
    </>
  );
};

export default Login;
