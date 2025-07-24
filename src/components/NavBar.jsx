import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/listings', label: 'Listings' },
    { path: '/add', label: 'Add Apartment' },
  ];

  return (
    <nav className="bg-white shadow p-4">
      <div className="flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-blue-600">
          Dream Apartment Finder
        </h1>

        
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

    
        <ul className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="hover:text-blue-500 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      {menuOpen && (
        <ul className="sm:hidden mt-4 space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={handleLinkClick}
                className="block hover:text-blue-500 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
