import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/profile_img.svg";

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
            src={profile_img}
            alt="profile-img"
            className="w-48 md:w-64 rounded-xl shadow-lg"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          {/* About text */}
          <div className="flex flex-col gap-4 text-gray-300 leading-relaxed">
            <p>
              I am a passionate web developer focused on building modern and
              user-friendly applications. I enjoy turning ideas into real-world
              projects using clean and efficient code.
            </p>
            <p>
              I am continuously learning new technologies and improving my
              skills to create scalable and impactful solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <div>
              <p>HTML & CSS</p>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="w-[80%] h-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded"></div>
              </div>
            </div>

            <div>
              <p>React JS</p>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="w-[70%] h-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded"></div>
              </div>
            </div>

            <div>
              <p>JavaScript</p>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="w-[65%] h-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded"></div>
              </div>
            </div>

            <div>
              <p>Express JS</p>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="w-[60%] h-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            1+
          </h1>
          <p className="text-gray-400">YEARS OF EXPERIENCE</p>
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-600"></div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            2+
          </h1>
          <p className="text-gray-400">MERN PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
