"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import HireUsDialog from "../hireusdialog";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close drawer when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-30 w-full transition-all duration-300 ${
        scrolled ? "mt-0" : "mt-2 md:mt-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-2 sm:px-6">
        <div
          className={`relative flex h-14 items-center justify-between gap-3 rounded-2xl px-2 transition-all duration-300
          bg-gray-900/70 backdrop-blur-lg
          before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent 
          before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] 
          before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
          after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs`}
        >
          {/* Logo */}
          <div className="flex flex-1 items-center justify-start md:justify-start">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Buttons */}
          <ul className="hidden flex-1 items-center justify-end gap-3 md:flex">
            <li>
              <Link
                href="/join"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Join Community
              </Link>
            </li>
            <li>
              <HireUsDialog />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-20 bg-gray-900/90 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-gray-800/95 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col overflow-y-auto p-4">
            <div className="flex items-center justify-between border-b border-gray-700 pb-4">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-6 flex-1 space-y-2">
              <Link
                href="/"
                className="block rounded-lg px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block rounded-lg px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-auto space-y-2 border-t border-gray-700 pt-4">
              <Link
                href="/signin"
                className="block rounded-lg bg-gray-700 px-4 py-3 text-center text-gray-300 hover:bg-gray-600 hover:text-white"
              >
                Join Community
              </Link>
              <Link
                href="/signup"
                className="block rounded-lg bg-indigo-600 px-4 py-3 text-center text-white hover:bg-indigo-500"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
