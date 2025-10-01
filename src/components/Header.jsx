
import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-hero">
        <div className="header-left">
          <img className="logo-img" src="src/data/logo.png" alt="logo" width="50" height="50"/>
          <h1>Cartify</h1>
        </div>
        <div className="cart-container">
          <img src="src/data/shopping-cart.png" alt="cartlogo" width="30" height="30"/>
          <span className="cart-label">Cart</span>
        </div>
      </div>
    </header>
  );
}


