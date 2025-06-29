import React, { useRef, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import axios from "../../API/axiosConfig";

function Register({ visible }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();
  const confirmPasswordDom = useRef();
  const { setShow } = visible || {};
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value.trim();
    const firstnameValue = firstnameDom.current.value.trim();
    const lastnameValue = lastnameDom.current.value.trim();
    const emailValue = emailDom.current.value.trim();
    const passwordValue = passwordDom.current.value;
    const confirmPasswordValue = confirmPasswordDom.current.value;

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordValue ||
      !confirmPasswordValue
    ) {
      alert("Please provide all information");
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("/user/register", {
        user_name: usernameValue,
        first_name: firstnameValue,
        last_name: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });
      alert("Registration Successful! Switching to Login...");
      navigate("/");

      setShow?.(false);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      alert(errorMessage);
    }
  }

  return (
    <div className={styles.registerCard}>
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input ref={usernameDom} type="text" placeholder="Username" required />
        <input
          ref={firstnameDom}
          type="text"
          placeholder="First Name"
          required
        />
        <input ref={lastnameDom} type="text" placeholder="Last Name" required />
        <input ref={emailDom} type="email" placeholder="Email" required />

        <div className={styles.passwordContainer}>
          <input
            ref={passwordDom}
            type={showPassword ? "text" : "password"} // Toggle password visibility
            placeholder="Password"
            required
          />
          <span
            className={styles.passwordToggle}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <BiShow size={20} /> : <BiHide size={20} />}
          </span>
        </div>

        <div className={styles.passwordContainer}>
          <input
            ref={confirmPasswordDom}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
          <span
            className={styles.passwordToggle}
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <BiShow size={20} /> : <BiHide size={20} />}
          </span>
        </div>

        <button type="submit">Register</button>
      </form>

      <Link
        to="/login"
        onClick={() => handleToggl(false)}
        className={styles.toggleLogin}
      >
        Already have an account? Login
      </Link>
    </div>
  );
}

export default Register;
