import { useState } from "react";
import Axios from "axios";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    setMessage("");

    if (event.target.value !== password) {
      setMessage("Passwords do not match");
    }
  }

  function signup() {
    if (!message) {
      Axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res);
        if (res.data) {
          props.onClick(true);
        }
      });
    }
  }

  return (
    <>
      <form className="loginInput">
        <h1 className="mb-4">Register</h1>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form1Example1"
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
            id="form1Example2"
            className="form-control"
            onChange={onPasswordChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            onChange={onConfirmPasswordChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Confirm password
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={signup}
        >
          Sign up
        </button>

        <div className="text-center">
          <p>
            Already have an account?{" "}
            <span className="loginRegister" onClick={() => props.onClick(true)}>
              Login
            </span>
          </p>
          <p className="text-danger">{message ? message : ""}</p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
