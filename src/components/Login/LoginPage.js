import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
    <div className={styles.wrapper}>
      <h1>{isLogin ? "Login" : "Register"}</h1>

      <form onSubmit={(e) => handleSubmit(e, isLogin ? "signin" : "signup")}>
        <div className={styles.inputBox}>
          <input name="email" type="text" placeholder="Email" required />
        </div>

        <div className={styles.inputBox}>
          <input name="password" type="password" placeholder="Password" required />
        </div>

        {isLogin && (
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <p onClick={handleReset} className={styles.forgotLink}>Forgot Password?</p>
          </div>
        )}

        <button type="submit" className={styles.btn}>
          {isLogin ? "Login" : "Register"}
        </button>

        <div className={styles.registerLink}>
          {isLogin ? (
            <p>Don't have an account? <span onClick={() => setIsLogin(false)} className={styles.toggleLink}>Register</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setIsLogin(true)} className={styles.toggleLink}>Login</span></p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
