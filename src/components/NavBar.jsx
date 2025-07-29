import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/listings", label: "Listings" },
    { path: "/add", label: "Add Apartment" },
  ];

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-blue-600">
          Dream Apartment Finder
        </h1>

        {/* Hamburger (Mobile) */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`transition hover:text-blue-600 ${
                  location.pathname === link.path ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden mt-4 space-y-2 animate-slide-down">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={closeMenu}
                className={`block px-2 py-1 rounded hover:text-blue-600 ${
                  location.pathname === link.path ? "text-blue-600 font-medium" : "text-gray-700"
                }`}
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
