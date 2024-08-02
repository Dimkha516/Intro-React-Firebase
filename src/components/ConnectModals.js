import React, { useState } from "react";
import SignUp from "./Login";
import Login from "./SignUp";

const ConnectModals = () => {
  const [signUp, setSignUp] = useState("true");

  return (
    <div className="connect-modal">
      <div className="connecting-btn">
        <button
          style={{ background: signUp ? "#282c34" : "#996666" }}
          onClick={() => setSignUp(false)}
        >
          Se connecter
        </button>

        <button
          style={{ background: signUp ? "#996666" : "#282c34" }}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
      </div>
      {signUp ? <Login /> : <SignUp />}
    </div>
  );
};

export default ConnectModals;
