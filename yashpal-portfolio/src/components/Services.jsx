import React, { act, useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import Services_Data from "../assets/services_data";
import arrow_icon from "../assets/arrow_icon.svg";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  const [expand, setExpand] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <motion.div
      id="service"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
      className="w-full flex flex-col items-center gap-12 py-16 px-6 md:px-20 text-white"
    >
      {/* Title */}
      <motion.div variants={fadeUp} className="relative">
        <h1 className="py-6 text-4xl md:text-5xl font-semibold">Services</h1>
        <img
          src={theme_pattern}
          alt="theme-pattern"
          className="absolute bottom-0 right-0 z-[-1] opacity-40"
        />
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <div className="contents">
          {Services_Data.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="group relative bg-[#111] p-6 rounded-2xl border border-white/10 
        hover:border-[#ff7a18] transition duration-500 overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
        bg-gradient-to-br from-[#ff7a18]/10 to-[#ff3c00]/10 blur-xl"
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="text-sm text-gray-500">{service.s_no}</h3>

                <h2
                  className="text-xl font-semibold 
          bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
          bg-clip-text text-transparent"
                >
                  {service.s_name}
                </h2>

                {/* Description */}

                {setExpand && (
                  <p
                    className={`text-gray-400 text-sm leading-relaxed overflow-hidden ${activeIndex === idx ? "opacity-100 max-h-40" : "opacity-0 max-h-0"} md:group-hover:opacity-100 md:group-hover:max-h-40 transition-all duration-500`}
                  >
                    {service.s_desc}
                  </p>
                )}
                {/* <p
                  className="text-gray-400 text-sm leading-relaxed 
          opacity-0 max-h-0 overflow-hidden 
          group-hover:opacity-100 group-hover:max-h-40 
          transition-all duration-500"
                >
                  {service.s_desc}
                </p> */}

                {/* Read More */}
                <button
                  onClick={() => setExpand(!expand)}
                  className="flex items-center gap-2 mt-2"
                >
                  <p className="text-sm text-gray-400 group-hover:text-[#ff7a18] transition">
                    Read More
                  </p>

                  <img
                    src={arrow_icon}
                    alt="arrow"
                    className="w-4 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
