import React from "react";
import profile_img from "../assets/profile_img.svg";
import yash from "../assets/yash.png";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center justify-center gap-10 min-h-screen text-white mb-10 px-4 pt-10"
    >
      {/* RIGHT SIDE (Image) */}
      <div className="lg:w-1/2 flex justify-center pt-10">
        <img
          src={yash}
          alt="profile"
          className="w-60 md:w-72 lg:w-80 rounded-3xl shadow-2xl animate-bounce"
        />
      </div>

      {/* LEFT SIDE (Text Content) */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 lg:w-1/2">
        {/* Heading */}
        <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            I'm Yashpal
          </span>
          , Full Stack Developer
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Passionate developer focused on building responsive and user-friendly
          web applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-5 font-medium">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:scale-105 transition duration-300 shadow-md hover:shadow-xl"
          >
            Connect With Me
          </a>

          <button className="px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
            My Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <Github className="cursor-pointer hover:scale-110 transition duration-300" />
          <Linkedin className="cursor-pointer hover:scale-110 transition duration-300" />
          <Mail className="cursor-pointer hover:scale-110 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
