import React, { useState } from "react";
import "./LoginPage.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import { database } from "./FirebaseConfig";
import { database } from "../FirebaseConfig";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="wrapper">
      <h1>{isLogin ? "Login" : "Register"}</h1>
      
      <form onSubmit={(e) => handleSubmit(e, isLogin ? "signin" : "signup")}>
        <div className="input-box">
          <input name="email" type="text" placeholder="Email" required />
          <i className="bx bxs-user"></i>
        </div>
        
        <div className="input-box">
          <input name="password" type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>

        {isLogin && (
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <p onClick={handleReset} className="forgot-link">Forgot Password?</p>
          </div>
        )}

        <button type="submit" className="btn">
          {isLogin ? "Login" : "Register"}
        </button>

        <div className="register-link">
          {isLogin ? (
            <p>Don't have an account? <span onClick={() => setIsLogin(false)} className="toggle-link">Register</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setIsLogin(true)} className="toggle-link">Login</span></p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
