import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import yash from "../assets/yash.png";
import avatar from "../assets/avatar.svg";

const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "React JS", level: "75%" },
  { name: "Node JS", level: "70%" },
  { name: "MongoDB", level: "60%" },
  { name: "Tailwind CSS", level: "85%" },
];

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-10 mx-6 md:mx-20 py-10 text-white"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="py-6 text-4xl md:text-5xl font-semibold">About Me</h1>
        <img
          src={theme_pattern}
          alt="theme-pattern"
          className="absolute bottom-0 right-0 z-[-1] opacity-40"
        />
      </div>

      {/* Sections */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-5">
        {/* Left */}
        <div>
          <img
            src={avatar}
            alt="profile-img"
            className="w-48 md:w-64 h-50 rounded-xl shadow-lg animate-pulse"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          {/* About text */}
          <div className="flex flex-col gap-4 text-gray-300 leading-relaxed">
            <p>
              I’m a <b> Full Stack Developer </b> currently pursuing my degree
              in Electronics and Communication Engineering at
              <b> NIT Andhra Pradesh. </b>
              I’m passionate about building modern web applications and enjoy
              working across both frontend and backend.
            </p>
            <p>
              I focus on developing practical solutions, improving my skills
              through projects, and staying updated with the latest
              technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6 max-w-xl">
            {/* SKILL ITEM */}
            {skills.map((skill, index) => (
              <div key={index} className="group">
                {/* SKILL NAME */}
                <div className="flex justify-between mb-1">
                  <p className="text-gray-300 group-hover:text-white transition">
                    {skill.name}
                  </p>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </div>

                {/* BAR BACKGROUND */}
                <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  {/* PROGRESS BAR */}
                  <div
                    style={{ width: skill.level }}
                    className="h-2 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
          shadow-[0_0_15px_rgba(255,120,0,0.6)] 
          transition-all duration-700 group-hover:scale-x-105 origin-left"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10">
        {/* ITEM */}
        <div className="text-center group cursor-pointer">
          <h1
            className="text-4xl md:text-5xl font-bold 
      bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
      bg-clip-text text-transparent
      transition duration-300
      group-hover:scale-110
      group-hover:drop-shadow-[0_0_10px_rgba(255,120,0,0.8)]"
          >
            1+
          </h1>
          <p className="text-gray-400 text-sm tracking-wider mt-2">
            YEARS OF EXPERIENCE
          </p>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#ff7a18] to-transparent"></div>

        {/* ITEM */}
        <div className="text-center group cursor-pointer">
          <h1
            className="text-4xl md:text-5xl font-bold 
      bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
      bg-clip-text text-transparent
      transition duration-300
      group-hover:scale-110
      group-hover:drop-shadow-[0_0_10px_rgba(255,120,0,0.8)]"
          >
            2+
          </h1>
          <p className="text-gray-400 text-sm tracking-wider mt-2">
            MERN PROJECTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
