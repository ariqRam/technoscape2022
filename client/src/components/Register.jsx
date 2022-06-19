import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

const Register = () => {
  const [login, setLogin] = useState(true);

  function handleClick(value) {
    setLogin(value);
  }

  if (login) {
    return <Login onClick={handleClick} />;
  } else {
    return <SignUp onClick={handleClick} />;
  }
};

export default Register;
