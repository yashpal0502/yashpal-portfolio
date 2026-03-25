import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import { motion } from "motion/react";
import avatar from "../assets/avatar.svg";

const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "React JS", level: "75%" },
  { name: "Node JS", level: "70%" },
  { name: "MongoDB", level: "65%" },
  { name: "Tailwind CSS", level: "85%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const About = () => {
  return (
    <motion.div
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
      className="w-full flex flex-col items-center justify-center gap-10 px-6 md:px-20 py-10 text-white"
    >
      {/* Title */}
      <motion.div variants={fadeUp} className="relative">
        <h1 className="py-6 text-4xl md:text-5xl font-semibold">About Me</h1>
        <img
          src={theme_pattern}
          alt="theme-pattern"
          className="absolute bottom-0 right-0 z-[-1] opacity-40"
        />
      </motion.div>

      {/* Sections */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-5">
        {/* Left Image */}
        <motion.div variants={fadeLeft}>
          <img
            src={avatar}
            alt="profile-img"
            className="w-48 md:w-64 rounded-xl shadow-lg animate-pulse"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeRight} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-gray-300 leading-relaxed">
            <p>
              I'm a <b>Full Stack Developer</b> currently pursuing my degree in
              Electronics and Communication Engineering at
              <b> NIT Andhra Pradesh.</b> I'm passionate about building modern
              web applications and enjoy working across both frontend and
              backend.
            </p>
            <p>
              I focus on developing practical solutions, improving my skills
              through projects, and staying updated with the latest
              technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeUp} className="group">
                {/* Skill Name */}
                <div className="flex justify-between mb-1">
                  <p className="text-gray-300 group-hover:text-white transition">
                    {skill.name}
                  </p>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </div>

                <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2 rounded-full 
                    bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
                    shadow-[0_0_15px_rgba(255,120,0,0.6)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10">
        <motion.div
          variants={fadeUp}
          className="text-center group cursor-pointer"
        >
          <h1
            className="text-4xl md:text-5xl font-bold 
            bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
            bg-clip-text text-transparent
            transition duration-300
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_10px_rgba(255,120,0,0.8)]"
          >
            1
          </h1>
          <p className="text-gray-400 text-sm tracking-wider mt-2">
            INTERNSHIP
          </p>
        </motion.div>

        <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#ff7a18] to-transparent"></div>

        <motion.div
          variants={fadeUp}
          className="text-center group cursor-pointer"
        >
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
        </motion.div>

        <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#ff7a18] to-transparent"></div>

        <motion.div
          variants={fadeUp}
          className="text-center group cursor-pointer"
        >
          <h1
            className="text-4xl md:text-5xl font-bold 
            bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
            bg-clip-text text-transparent
            transition duration-300
            group-hover:scale-110
            group-hover:drop-shadow-[0_0_10px_rgba(255,120,0,0.8)]"
          >
            3+
          </h1>
          <p className="text-gray-400 text-sm tracking-wider mt-2">
            MERN PROJECTS
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
