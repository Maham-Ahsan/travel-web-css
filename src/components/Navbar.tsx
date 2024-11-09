import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="#hero">
            <Image
              src="/images/logo2-removebg-preview.png"
              alt="logo"
              width={80}
              height={65}
              priority
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#explore">Explore</a></li>
          <li className="menuLink"><a href="#about">About us</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li className="menuLink">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="menuLink">
            <a href="#explore" onClick={toggleMenu}>Explore</a>
          </li>
          <li className="menuLink">
            <a href="#about" onClick={toggleMenu}>About Us</a>
          </li>
          <li className="menuLink">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
