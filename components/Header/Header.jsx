"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Set initial dark mode based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md transition-colors z-50 ${
        darkMode ? "bg-dark-primary text-dark-text" : "bg-light-primary text-light-text"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Dark Mode Toggle and Logo */}
        <div className="flex items-center space-x-4">
          <button
            className={`p-2 rounded transition-colors ${
              darkMode
                ? "bg-dark-accent text-dark-text"
                : "bg-light-accent text-light-text"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <div className="text-xl font-bold">
          <Link href="/">
                    <img
                    src="/assets/Exir.png"
                    alt="Exir Logo"
                    className="h-10 w-auto hover:opacity-80 transition-opacity"
                    />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex flex-row-reverse gap-6 ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          <Link
            href="/"
            className="hover:text-light-accent text-lg dark:hover:text-dark-accent"
          >
            خانه
          </Link>
          <Link
            href="/about"
            className="hover:text-light-accent text-lg dark:hover:text-dark-accent"
          >
            درباره ما
          </Link>
          <Link
            href="/contact"
            className="hover:text-light-accent text-lg dark:hover:text-dark-accent"
          >
            تماس با ما
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 right-0 text-right h-full w-64 z-50 flex flex-col space-y-4 p-4 ${
            darkMode ? "bg-dark-primary" : "bg-light-primary"
          }`}
        >
          <button
            className={`self-end p-2 text-xl ${
              darkMode ? "text-dark-text" : "text-red-600"
            }`}
            onClick={toggleMenu}
          >
            ✖
          </button>
          <Link
            href="/"
            className="hover:text-light-accent dark:hover:text-dark-accent"
            onClick={toggleMenu}
          >
            خانه
          </Link>
          <Link
            href="/about"
            className="hover:text-light-accent dark:hover:text-dark-accent"
            onClick={toggleMenu}
          >
            درباره ما
          </Link>
          <Link
            href="/contact"
            className="hover:text-light-accent dark:hover:text-dark-accent"
            onClick={toggleMenu}
          >
            تماس با ما
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
