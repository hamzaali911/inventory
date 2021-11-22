import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = ({ loginAuth }) => {
    let navigate = useNavigate();
  var user = {
    username: "admin",
    password: "12345",
  };
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const emailHandler = (e) => {
    if (e.target.value) {
      setEmail(e.target.value);
    } else {
      setEmail("");
    }
    console.log(email);
  };
  const passwordHandler = (e) => {
    if (e.target.value) {
      setPassowrd(e.target.value);
    } else {
      setPassowrd("");
    }
    console.log(password);
  };
  const authenticator = () => {
      console.log("i am working")
    if (email === user.username && password === user.password) {
      loginAuth(true);
      navigate("/");
    } else loginAuth(false)
  };
  return (
    <div className="login">
      <div className="loginForm">
        <input type="text" onChange={emailHandler} autoComplete="off" placeholder="UserName" />
        <input type="password" onChange={passwordHandler} autoComplete="off" placeholder="Password" />
        <button onClick={authenticator}>Login</button>
      </div>
    </div>
  );
};

export default Login;
