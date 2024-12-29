// App.js
import React from 'react';
import '../App.css';

const App = () => {
  return (
    <div className="login-container">
      <div className="food-image">
        <img 
          src="images/loginpage.jpg" 
          alt="Food" 
          className="food-banner"
        />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="username@gmail.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit" className="sign-in-btn">Sign in</button>

          <p className="register-link">
            Don't have an account yet? <a href="#">Register for free</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
