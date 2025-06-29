import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./landing.module.css";
import Login from "../Login/Login";
import Register from "../Register/Register";

import About from "./About";
import Layout from "../../Component/layout/Layout";

function Landing() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(location.pathname === "/register");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  // Toggle form & update URL when clicking
  const handleToggle = (isRegister) => {
    setShow(isRegister);
    navigate(isRegister ? "/register" : "/login");
  };

  return (
    <Layout>
      <div className={classes.landingWrapper}>
        <main className={classes.mainContent}>
          <div className={classes.loginSection}>
            {show ? (
              <Register visible={{ show, handleToggle }} />
            ) : (
              <Login visible={{ show, handleToggle }} />
            )}
          </div>
          <About />
        </main>
      </div>
    </Layout>
  );
}

export default Landing;
