import React from "react";
import "../styles/login.css";
import grokIMg from "../assets/img/image.png"; // TradeGptlogo image

const LoginComponent = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-card">
        {/* Logo */}
        <div className="text-center logo mb-4">
          <img src={grokIMg} alt="TradeGptLogo" className="grok-logo obj_fit" />
        </div>

        {/* Social Login Buttons */}
        <button className=" social-login">
        <i className="fab fa-x-twitter social-icon"></i> Continue with X
        </button>
        <button className=" social-login">
        <i className="fab fa-google social-icon"></i> Continue with Google
        </button>
        <button className=" social-login">
        <i className="fab fa-apple social-icon"></i> Continue with Apple
        </button>

        {/* Login Form */}
        <div className="form-group mt-4">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group position-relative">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" />
          <span className="material-icons password-toggle">visibility_off</span>
        </div>

        {/* Forgot Password */}
        <div className="text-left">
          <a href="#" className="forgot-password">Forgot your password?</a>
        </div>

        {/* Login Button */}
        <button className="login-btn my-3">Login</button>

        {/* Signup Link */}
        <div className="text-center">
          <p>
            Don't have an account? <a href="#" className="signup-link">Sign up</a>
          </p>
        </div>

        {/* Terms and Privacy */}
        <p className="terms-text text-center">
          By continuing, you agree to xAI's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
