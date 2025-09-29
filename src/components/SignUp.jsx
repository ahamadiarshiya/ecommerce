import React from 'react';
import '../styles/SignUp.css';
function SignUp(){
    return (
        <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>
          Username : 
          <input type="email" placeholder="Enter username" />
        </label>
        <label>
          Password :
          <input type="password" placeholder="Enter password" />
        </label>
        <p>Don't have an account <Link to="/signup">Sign up</Link></p>
        <button type="submit">Login</button>
      </form>
    </div>
    )
}
export default SignUp;