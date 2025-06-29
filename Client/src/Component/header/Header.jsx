import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../Resource/img/evangadi_log.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Evangadi Logo" className={styles.logo} />
      </div>
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/how-it-works" className={styles.link}>
          How it Works
        </Link>
        <Link to="/login">
          <button className={styles.signInBtn}>Sign Out</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
