import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Auth.scss";

export const Auth = ({ stateLogin }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createAccount, setCreateAccount] = useState(false);

  const submit = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        if (data.user) {
          stateLogin(true);
          localStorage.setItem("user", JSON.stringify(data.user.email));
        }
      })
      .catch(function (error) {
        console.log(error);
        window.alert("Correo o contraseña erronea");
      });
  };
  return (
    <div className="container-auth">
      <div className="container-auth__title">
        <h3>Welcome</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          sequi similique minima.
        </p>
      </div>
      {!createAccount && (
        <div>
          <div className="container-input">
            <label htmlFor="email" className="container-input__title">
              User
            </label>
            <input
              type="email"
              id="email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="container-input">
            <label htmlFor="password" className="container-input__title">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div className="container-input__button">
            <button className="btn-large" onClick={login}>
              Login
            </button>
          </div>
        </div>
      )}
      {createAccount && (
        <div>
          <div className="container-input">
            <label htmlFor="email" className="container-input__title">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="container-input">
            <label htmlFor="password" className="container-input__title">
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div className="container-input__button">
            <button onClick={submit} className="btn-large">
              Create
            </button>
          </div>
        </div>
      )}
      <div className="container-button">
        <button
          className="btn"
          onClick={() => setCreateAccount(!createAccount)}
        >
          {!createAccount && "Create Account"}
          {createAccount && "login"}
        </button>
      </div>
    </div>
  );
};
