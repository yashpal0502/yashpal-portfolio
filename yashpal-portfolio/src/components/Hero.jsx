import React from "react";
import { motion } from "motion/react";
import avatar from "../assets/avatar.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import nodejs from "../assets/nodejs.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import { Github, Linkedin, Mail, ArrowDown, MailIcon } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full bg-gradient-to-r from-[#1a0f0a] via-[#2b140a] to-[#3a1a0a] p-10 md:p-12"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h4 className="text-gray-300 text-lg mb-3">
            Hey, I am
            <span className="text-orange-500 font-semibold"> Yashpal</span>
          </h4>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Full Stack Developer
          </h1>

          <p className="text-sm text-gray-400 max-w-md mb-6">
            I design, build, and optimize full-stack web applications that
            deliver real value. As a Full Stack Developer, I bridge the gap
            between design and technology, transforming ideas into seamless,
            high-performing digital experiences.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 py-4 md:py-10 mb-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden bg-orange-500 px-7 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(255,120,0,0.3)]"
            >
              My Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex bg-orange-500 px-7 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(255,120,0,0.3)]"
            >
              Connect with me
            </motion.a>

            <div className="flex items-start justify-start gap-4 ">
              <motion.a
                href="https://github.com/yashpal0502"
                target="blank"
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full"
              >
                <Github />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yash-pal05"
                target="blank"
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full"
              >
                <Linkedin />
              </motion.a>
              <motion.a
                href="mailto:yashpalwork05@gmail.com"
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full"
              >
                <MailIcon />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center h-110"
        >
          {/* GLOW */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl"
          />

          {/* IMAGE */}
          <motion.img
            src={avatar}
            alt="hero"
            initial={{ y: 30 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative w-[300px] md:w-[400px] z-10"
          />

          {/* FLOATING ICONS */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-20 left-2 md:left-8 bg-white/10 p-3 rounded-xl backdrop-blur-md"
          >
            <img src={react} className="w-7" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-35 right-8 md:right-19 bg-white/10 p-3 rounded-xl backdrop-blur-md"
          >
            <img src={css} className="w-7" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-35 left-8 md:left-19 bg-white/10 p-3 rounded-xl backdrop-blur-md"
          >
            <img src={html} className="w-7" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-0 bg-white/10 p-3 rounded-xl backdrop-blur-md"
          >
            <img src={js} className="w-7" />
          </motion.div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-20 right-2 md:right-8 bg-white/10 p-3 rounded-xl backdrop-blur-md"
          >
            <img src={nodejs} className="w-7" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
