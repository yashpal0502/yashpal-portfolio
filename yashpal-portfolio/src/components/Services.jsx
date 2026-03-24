import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import Services_Data from "../assets/services_data";
import arrow_icon from "../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div
      id="service"
      className="flex flex-col items-center gap-12 py-16 px-6 md:px-20 text-white"
    >
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
            className="group relative bg-[#111] p-6 rounded-2xl border border-white/10 
      hover:border-[#ff7a18] transition duration-500 overflow-hidden cursor-pointer"
          >
            {/* GLOW BACKGROUND */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
      bg-gradient-to-br from-[#ff7a18]/10 to-[#ff3c00]/10 blur-xl"
            ></div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col gap-4">
              {/* NUMBER */}
              <h3 className="text-sm text-gray-500">{service.s_no}</h3>

              {/* TITLE */}
              <h2
                className="text-xl font-semibold 
        bg-gradient-to-r from-[#ff7a18] to-[#ff3c00] 
        bg-clip-text text-transparent"
              >
                {service.s_name}
              </h2>

              {/* DESCRIPTION (HIDDEN INITIALLY) */}
              <p
                className="text-gray-400 text-sm leading-relaxed 
        opacity-0 max-h-0 overflow-hidden 
        group-hover:opacity-100 group-hover:max-h-40 
        transition-all duration-500"
              >
                {service.s_desc}
              </p>

              {/* READ MORE */}
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm text-gray-400 group-hover:text-[#ff7a18] transition">
                  Read More
                </p>

                <img
                  src={arrow_icon}
                  alt="arrow"
                  className="w-4 transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
