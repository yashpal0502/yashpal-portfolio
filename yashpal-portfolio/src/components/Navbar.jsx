import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-10 md:mx-20 py-2">
      <img src={logo} alt="logo" />

      <div className="hidden md:flex gap-10 font-medium text-sm">
        <Link to="/" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Home
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Home
          </span>
        </Link>
        <Link to="/about" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            About Me
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            About Me
          </span>
        </Link>
        <Link to="/service" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Services
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Services
          </span>
        </Link>
        <Link to="/portfolio" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Portfolio
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Portfolio
          </span>
        </Link>
        <Link to="/contact" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Contact
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Contact
          </span>
        </Link>
      </div>

      <p className="border rounded-full px-3 py-1.5 text-md bg-gradient-to-l from-[#da7c25] to-[#b923e1] hover:scale-110 transition duration-400 cursor-pointer">
        Connect with me
      </p>
    </div>
  );
};

export default Navbar;
