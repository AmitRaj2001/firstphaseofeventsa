// src/components/MobileMenu.js
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const MobileMenu = () => (
  <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
    <div className="flex flex-col p-4 space-y-4">
      <a href="/about" className="text-gray-600 hover:text-blue-600">About us</a>
      <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact us</a>
      <Link to="Log In">
        <Button variant="outline" className="w-full">Log In</Button>
      </Link>
      <Link to="Sign Up">
        <Button className="w-full bg-black text-white">Sign Up</Button>
      </Link>
    </div>
  </div>
);

export default MobileMenu;
