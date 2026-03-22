import React from "react";
import profile_img from "../assets/profile_img.svg";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center gap-6 md:gap-8 min-h-screen text-white mb-10"
    >
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="profile"
        className="mt-12 md:mt-16 w-50 md:w-70 rounded-full shadow-lg animate-pulse"
      />

      {/* Heading */}
      <h1 className="text-center w-[90%] md:w-2/3 font-medium text-2xl md:text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
          I'm Yashpal
        </span>
        , Full Stack Developer
      </h1>

      {/* Description */}
      <p className="w-[90%] md:w-[60%] text-center text-lg md:text-xl leading-relaxed text-gray-300">
        Passionate developer focused on building responsive and user-friendly
        web applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-5 font-medium">
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:scale-105 transition duration-300 shadow-md hover:shadow-xl">
          Connect With Me
        </button>

        <button className="px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
          My Resume
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4">
        <Github className="cursor-pointer hover:scale-110 transition duration-300" />
        <Linkedin className="cursor-pointer hover:scale-110 transition duration-300" />
        <Mail className="cursor-pointer hover:scale-110 transition duration-300" />
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-6 flex flex-col items-center animate-bounce">
        <ArrowDown size={28} />
      </div> */}
    </div>
  );
};

export default Hero;
