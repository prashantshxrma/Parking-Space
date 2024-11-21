import React from 'react';
import "../Style/Signup.css";

const Signup = () => {
  return (
    <div>
      <div className="form-container">
        <h2>Sign In / Sign Up</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="vehicle-type">Vehicle Type:</label>
          <input type="text" id="vehicle-type" name="vehicle-type" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <div className="checkbox-container">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
