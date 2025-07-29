import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-4 md:container mx-auto">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold select-none">
          <span className="text-white">Port</span>
          <span className="text-blue-400">folio.</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(true)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-white">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-blue-400 underline-offset-4 text-lg font-medium transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-800 text-white p-6 z-50 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-2xl mb-6"
        >
          <i className="fas fa-times"></i>
        </button>

        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-blue-400 underline-offset-4 text-xl font-medium transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
