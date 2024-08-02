import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
    } catch (error) {
      setLoginError(true);
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login-block">
        <h3>Se connecter</h3>
        <form className="login-form" onSubmit={(e) => handleLogin(e)}>
          <input type="email" placeholder="Email" required ref={loginEmail} />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={loginPassword}
          />
          <input type="submit" value="Se connecter" />
          <span>
            {loginError && "Le mail ou le mot de passe ne correspond pas"}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
