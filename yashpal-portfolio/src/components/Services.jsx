import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import Services_Data from "../assets/services_data";
import arrow_icon from "../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-16 px-6 md:px-20 text-white">
      {/* Title */}
      <div className="relative">
        <h1 className="py-6 text-4xl md:text-5xl font-semibold">My Services</h1>
        <img
          src={theme_pattern}
          alt="theme-pattern"
          className="absolute bottom-0 right-0 z-[-1] opacity-40"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {Services_Data.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-l from-[#3f0028] to-[#582300] hover:border border-[#ff00ff] transition duration-300 flex flex-col gap-4"
          >
            {/* Number */}
            <h3 className="text-lg text-gray-400">{service.s_no}</h3>

            {/* Title */}
            <h2 className="text-xl font-semibold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              {service.s_name}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.s_desc}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 mt-3 cursor-pointer group">
              <p className="text-sm group-hover:text-purple-400 transition">
                Read More
              </p>
              <img
                src={arrow_icon}
                alt="arrow"
                className="w-4 group-hover:translate-x-1 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
