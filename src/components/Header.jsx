// src/components/Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between relative">
      <a href="/" className="text-3xl text-Black-800 font-serif">
        <b>EVENT</b><i>SA</i>
      </a>
      <nav className="hidden md:flex items-center space-x-4">
        <a href="/about" className="text-gray-600 hover:text-blue-600">About us</a>
        <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact us</a>
        <Link to="log_in">
          <Button variant="outline" className="ml-4">Log In</Button>
        </Link>
        <Link to="sign_up">
          <Button>Sign Up</Button>
        </Link>
      </nav>
      <Button className="md:hidden" variant="outline" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
