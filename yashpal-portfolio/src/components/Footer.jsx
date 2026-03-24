import React from "react";
import footer_logo from "../assets/footer_logo.svg";
import logo from "../assets/logo.svg";
import { User2Icon } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const Footer = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-10 px-6 md:px-20 py-12 text-white 
      bg-gradient-to-r from-[#0d0d0d] via-[#1a0f0a] to-[#2b140a] 
      border-t border-[#ff7a18]/20"
    >
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4 md:w-1/2">
          <img src={logo} alt="logo" className="w-36" />

          <p className="text-gray-400 leading-relaxed max-w-md">
            Passionate developer focused on building responsive and
            user-friendly web applications.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4 md:w-1/2">
          {/* INPUT */}
          <div
            className="flex items-center bg-white/5 backdrop-blur-md 
          rounded-full px-4 py-2 border border-white/10 
          focus-within:border-[#ff7a18] transition"
          >
            <User2Icon className="text-gray-400 mr-2" />

            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
            />
          </div>

          {/* BUTTON */}
          <a
            href="#home"
            className="w-fit px-6 py-2 rounded-full font-medium
          bg-gradient-to-r from-[#ff7a18] to-[#ff3c00]
          hover:scale-105 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)]
          transition duration-300"
          >
            Subscribe
          </a>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-white/10" />

      {/* Bottom */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Yashpal</span>. All Rights
          Reserved.
        </p>

        <div className="flex gap-6">
          <a className="hover:text-[#ff7a18] transition cursor-pointer">
            Terms of Services
          </a>

          <a className="hover:text-[#ff7a18] transition cursor-pointer">
            Privacy Policy
          </a>

          <a
            href="#contact"
            className="hover:text-[#ff7a18] transition cursor-pointer"
          >
            Connect
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
