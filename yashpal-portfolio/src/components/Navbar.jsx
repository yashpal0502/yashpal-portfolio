import React, { useState } from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // container animation (stagger effect)
  const container = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
      },
    },
  };

  // each item animation
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex items-center justify-between mx-10 md:mx-20 py-4"
    >
      {/* Logo */}

      <img src={logo} alt="logo" className="" />

      {/* Menu */}
      <motion.div className="hidden md:flex gap-10 font-medium text-sm">
        <motion.a
          variants={item}
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden h-6 group"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Home
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Home
          </span>
        </motion.a>

        <motion.a
          variants={item}
          href="#about"
          whileHover={{ scale: 1.1 }}
          className="relative overflow-hidden h-6 group"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            About Me
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            About Me
          </span>
        </motion.a>

        <motion.a
          variants={item}
          href="#service"
          whileHover={{ scale: 1.1 }}
          className="relative overflow-hidden h-6 group"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Services
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Services
          </span>
        </motion.a>

        <motion.a
          variants={item}
          href="#work"
          whileHover={{ scale: 1.1 }}
          className="relative overflow-hidden h-6 group"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Portfolio
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Portfolio
          </span>
        </motion.a>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-2 items-center"
      >
        <a
          href="#contact"
          className="border rounded-full px-3 py-1.5 text-md bg-gradient-to-l from-[#da7c25] to-[#b923e1] hover:scale-110 transition duration-300 cursor-pointer"
        >
          Connect
        </a>
        {/* Mobile Menu Button */}

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </div>
      </motion.div>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 left-0 w-60 h-screen z-50 bg-black/70 text-base flex flex-col items-center justify-between py-20 max-md:py-40 gap-10 font-medium text-gray-800 backdrop-blur-sm transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-5 max-md:gap-8 text-white font-medium">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="transform hover:scale-110 transition duration-200"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="transform hover:scale-110 transition duration-200"
          >
            About Me
          </a>

          <a
            href="#service"
            onClick={() => setIsMenuOpen(false)}
            className="transform hover:scale-110 transition duration-200"
          >
            Services
          </a>

          <a
            href="#work"
            onClick={() => setIsMenuOpen(false)}
            className="transform hover:scale-110 transition duration-200"
          >
            My Works
          </a>
        </div>

        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="border rounded-full px-3 py-1.5 text-white text-md bg-gradient-to-l from-[#da7c25] to-[#b923e1] hover:scale-110 transition duration-300 cursor-pointer"
        >
          Connect with me
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
