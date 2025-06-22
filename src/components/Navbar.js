import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Close menu when a link is clicked (mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Spercompany
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {/* Hamburger icon */}
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>الرئيسية</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>من نحن</Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>منتجاتنا</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>تواصل معنا</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
