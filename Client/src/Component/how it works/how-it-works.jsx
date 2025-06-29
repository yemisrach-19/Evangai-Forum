import React from "react";
import styles from "./howItWorks.module.css";

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <h2>How It Works</h2>
      <p>
        This platform allows users to connect, share information, and ask
        questions.
      </p>
      <h4>Step 1: Create an Account</h4>
      <p>Sign up to create your account and gain access to all features.</p>
      <h4>Step 2: Ask Questions</h4>
      <p>Post your questions and get answers from the community.</p>
      <h4>step3:Give answe for the question that has been posted</h4>
      <p>post your answer if you think it is the right answer</p>
      <h4>Step 4: Engage with Others</h4>
      <p>
        Interact with other users, provide answers, and gain reputation points.
      </p>
    </div>
  );
};

export default HowItWorks;
