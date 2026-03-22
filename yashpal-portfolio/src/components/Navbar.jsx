import React, { useState } from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

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
      className="flex items-center justify-between mx-10 md:mx-20 py-2"
    >
      {/* Logo */}
      <img src={logo} alt="logo" />

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

        <motion.a
          variants={item}
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="relative overflow-hidden h-6 group"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Contact
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Contact
          </span>
        </motion.a>
      </motion.div>

      {/* Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="border rounded-full px-3 py-1.5 text-md bg-gradient-to-l from-[#da7c25] to-[#b923e1] hover:scale-110 transition duration-300 cursor-pointer"
      >
        Connect with me
      </motion.a>
    </motion.div>
  );
};

export default Navbar;
