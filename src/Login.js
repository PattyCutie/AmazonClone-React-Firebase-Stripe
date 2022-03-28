import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    // with Firebase login....
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth => {
        history.push('/')
      }))
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    // Firebase register....

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created
        console.log(auth)
        if (auth) {
          history.push('/')
      }
      })
      .cathch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h2>Sign in to Amazon Clone</h2>

        <form>
          <h5>E-mail</h5>
          <input type="email" value={email}
            onChange={e =>
              setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password}
            onChange={e =>
              setPassword(e.target.value)} />
          
          <button onClick={signIn}
            type="submit" className="login__signInButton">
            Sign In
          </button>

        </form>
        <p>
          By signing-in you agree to <strong>"AMAZON CLONE PROJECT"</strong>{" "}
          Condition of Use & Sale. Please see out Privacy Notice, our Cookies
          Notice ans our Interest-based Ads Notice.
        </p>

        <button onClick={register}
          type="button" className="login__registerButton">
          or Create your Amazon Clone account
        </button>
      </div>
    </div>
  );
}

export default Login
