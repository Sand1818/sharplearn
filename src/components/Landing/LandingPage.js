import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.welcomeSection}>
        <h1 className={styles.heading}>Welcome to SharpLearn</h1>
        <p className={styles.description}>
          SharpLearn is a productivity web application crafted to empower students
          by streamlining study resources and offering insightful academic performance tracking. 
          With SharpLearn, students can efficiently plan their activities, 
          monitor grades, and manage their study materials with ease and precision.
        </p>
      </section>

      <section className={styles.getStartedSection}>
        <p className={styles.message}>Ready to get started on your academic journey?</p>
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => window.location.href = '/login'}>
            Get Started
          </button>
          {/*
          <button className={styles.button} onClick={() => window.location.href = '/register'}>
            Register
          </button>
          */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
