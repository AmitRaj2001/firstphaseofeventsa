import React, { useState } from 'react';
import { Archive, Home, Menu } from 'lucide-react';

const Navbar = ({ active }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl text-Black-800 font-serif">
          <b>EVENT</b><i>SA</i>
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className={`font-medium ${active === 'home' ? 'text-blue-600' : 'text-gray-600'}`}>
            <Home className="inline mr-2" size={18} />
            Home
          </a>
          <a href="#" className={`font-medium ${active === 'archive' ? 'text-blue-600' : 'text-gray-600'}`}>
            <Archive className="inline mr-2" size={18} />
            Archive
          </a>
          <a href="#" className="font-medium text-gray-600">Create Workspace</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className={`block font-medium ${active === 'home' ? 'text-blue-600' : 'text-gray-600'}`}>
            <Home className="inline mr-2" size={18} />
            Home
          </a>
          <a href="#" className={`block font-medium ${active === 'archive' ? 'text-blue-600' : 'text-gray-600'}`}>
            <Archive className="inline mr-2" size={18} />
            Archive
          </a>
          <a href="#" className="block font-medium text-gray-600">Create Workspace</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;