"use client";

import { useState } from "react";
import styles from "./signin.module.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter email");
      return;
    }

    setMessage("Email submitted successfully!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Join Orbea</h1>

        <p className={styles.description}>
          Enter your email address to log in or create your account.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className={styles.button} type="submit">
            Next
          </button>
        </form>

        {message && <p className={styles.msg}>{message}</p>}
      </div>
    </div>
  );
}