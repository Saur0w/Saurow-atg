import React, { useState } from 'react';
import styles from './style.module.scss';
import LandingPeople from "../../../assets/LandingPeople.svg";
import Lock from '../../../assets/Lock.svg';

function SignIn() {
    const [activeTab, setActiveTab] = useState('signin');

    return (
        <div className={styles.signInPage}>
            <main className={styles.mainContent}>
                <div className="container-fluid">
                    <div className="row min-vh-100">
                        <div className="col-12">
                            <div className={styles.leftContent}>
                                <div className={styles.heading}>
                                    <h1>
                                        Explore your <span className={styles.blueText}>hobby</span> or{' '}
                                        <span className={styles.purpleText}>passion</span>
                                    </h1>
                                </div>
                                <div className={styles.para}>
                                    <p>
                                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                                        suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
                                        about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
                                        outdoor activities...
                                    </p>

                                    <p>
                                        If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
                                        products, services or events. Hop on your hobbyhorse and enjoy the ride.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.rightContent}>
                                <div className={styles.formContainer}>
                                    <div className={styles.formTabs}>
                                        <button
                                            className={`${styles.tabBtn} ${activeTab === 'signin' ? styles.active : ''}`}
                                            onClick={() => setActiveTab('signin')}
                                        >
                                            Sign In
                                        </button>
                                        <button
                                            className={`${styles.tabBtn} ${activeTab === 'joinin' ? styles.active : ''}`}
                                            onClick={() => setActiveTab('joinin')}
                                        >
                                            Join In
                                        </button>
                                    </div>

                                    <div className={styles.formContent}>
                                        {activeTab === 'signin' ? <SignInForm /> : <JoinInForm />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={LandingPeople} alt="" />
                </div>
            </main>
        </div>
    );
}

function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={styles.formWrapper}>
            <button className={`btn ${styles.googleBtn} w-100 mb-3`}>
                <i className="fab fa-google me-2"></i>
                Continue with Google
            </button>

            <button className={`btn ${styles.facebookBtn} w-100 mb-3`}>
                <i className="fab fa-facebook-f me-2"></i>
                Continue with Facebook
            </button>

            <div className={styles.divider}>
                <p>Or connect with</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="email"
                    className={`form-control ${styles.customInput}`}
                    placeholder="Email"
                />
            </div>

            <div className="mb-3 position-relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${styles.customInput}`}
                    placeholder="Password"
                />
                <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <i className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                </button>
            </div>

            <div className={styles.formOptions}>
                <div className={styles.formCheck}>
                    <input type="checkbox" className={styles.formCheckInput} id="rememberMe" />
                    <label className={styles.formCheckLabel} htmlFor="rememberMe">
                        Remember me
                    </label>
                </div>
                <a href="#" className={styles.forgotLink}>
                    <img src={Lock} alt="lock" />
                    <p>Forgot password?</p>
                </a>
            </div>

            <button className={`btn ${styles.submitBtn} w-100`}>
                Continue
            </button>
        </div>
    );
}

function JoinInForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [passwordStrength, setPasswordStrength] = React.useState('');

    const checkPasswordStrength = (pass) => {
      if (pass.length === 0) {
        setPasswordStrength('');
        return;
      }
      if (pass.length < 6) {
        setPasswordStrength('Weak');
      } else if (pass.length < 10) {
        setPasswordStrength('Medium');
      } else {
        setPasswordStrength('Strong');
      }
    };

    const handlePasswordChange = (e) => {
      const newPass = e.target.value;
      setPassword(newPass);
      checkPasswordStrength(newPass);
    };

    return (
      <div className={styles.formWrapper}>
        <button className={`btn ${styles.googleBtn} w-100 mb-3`}>
          <i className="fab fa-google"></i> Continue with Google
        </button>

        <button className={`btn ${styles.facebookBtn} w-100 mb-3`}>
          <i className="fab fa-facebook-f"></i> Continue with Facebook
        </button>

        <div className={styles.divider}>
          <p>Or connect with</p>
        </div>

        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${styles.customInput}`}
            placeholder="Email"
          />
        </div>

        <div className="mb-3 position-relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className={`form-control ${styles.customInput} ${styles.passwordField}`}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
          </button>
          {passwordStrength && (
            <small className={styles.passwordStrength}>
              Password strength: {passwordStrength}
            </small>
          )}
        </div>

        <div className={styles.termsCheck}>
          <label htmlFor="agreeTerms">
            By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </label>
        </div>

        <button className={`btn ${styles.submitBtn} w-100`}>
            Agree and Continue
        </button>
      </div>
    );
  }

export default SignIn;