import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="first-two">SH</span>
        <span className="remaining">UD</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/orderonline">Services</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <Link to="/login">
          <button className="login-btn">Log In</button>
        </Link>
        <span className="cart-icon">🛒 0</span>
         {/* Add the LanguageSwitcher here */}
      </div>
    </nav>
  );
};

export default Navbar;
