import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/products');
  };

  return (
    <div className="login-background">
      <div className="login-box">
        <h2>Welcome 👋</h2>
        <p>Please login to your account</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
      <div className='image'><img src="src\data\logo.png" alt="logo" />
      <h1>Cartify</h1>
      <p className='description'>~ Your smart shopping destination !</p></div>
    </div>
  );
}
export default LoginPage;
