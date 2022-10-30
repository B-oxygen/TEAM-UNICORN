import React from "react";
import styles from "./header.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ authService }) {
  const [isLogin, setIsLogin] = useState(false);
  const history = useNavigate();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    setIsLogin(true);
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  const onLogout = (event) => {
    setIsLogin(false);
    authService.logout(event.currentTarget.textContent);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoTitle}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>51%</h1>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>shop</button>
        <button className={styles.button}>my page</button>
        {isLogin ? (
          <button className={styles.logout} onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className={styles.loginButton} onClick={onLogin}>
            ● Google
          </button>
        )}
      </div>
    </header>
  );
}
