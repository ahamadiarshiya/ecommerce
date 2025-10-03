import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // fetch categories from API
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
    setShowDropdown(false);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-hero">
        {/* Left: Logo */}
        <div className="header-left" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/products')}>
          <img className="logo-img" src="src/data/logo.png" alt="logo" />
          <h1 className="brand-name" style={{ marginLeft: '10px' }}>Cartify</h1>
        </div>

        {/* Center: Navigation */}
        <nav className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/products">Products</Link>
          {/* Categories Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="dropdown-title">Categories ▾</span>
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => navigate('/products')}>All Products</div>
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="dropdown-item"
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span onClick={scrollToFooter} style={{ cursor: 'pointer' }}>About</span>
          <Link to="/contact">Contact</Link>
        </nav>
        {/* Right: Search + Icons */}
        <div className="header-right">
          <input type="text" placeholder="Search..." className="header-search" />
          <Link to="/wishlist" className="icon-link">
            <img src="src/data/heart.png" alt="wishlist" className="icon-img" />
          </Link>
          <Link to="/account" className="icon-link">
            <img src="src/data/user.png" alt="profile" className="icon-img" />
          </Link>
          <Link to="/cart" className="cart-container">
            <img src="src/data/shopping-cart.png" alt="cartlogo" className="icon-img" />
            <span className="cart-label">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
