import React, { useEffect, useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";

const MyWork = () => {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    setWorkData(mywork_data);
  }, []);

  return (
    <div
      id="work"
      className="flex flex-col items-center gap-12 py-16 px-6 md:px-20 text-white"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="py-6 text-4xl md:text-5xl font-semibold">
          My Latest Work
        </h1>
        <img
          src={theme_pattern}
          alt="theme-pattern"
          className="absolute bottom-0 right-0 z-[-1] opacity-40"
        />
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {workData.map((work, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl">
            {/* Image */}
            <img
              src={work.w_img}
              alt="project"
              className="w-full h-60 object-cover rounded-xl group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-3">
              <p className="text-lg font-semibold">
                {work.w_live ? "View Project" : "In progress..."}
              </p>
              <p className="text-lg font-semibold">{work.w_des}</p>
              {work.w_live && (
                <a
                  href={work.w_link}
                  target="blank"
                  className="px-4 py-1 text-sm rounded bg-orange-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}

      {workData.length > 3 ? (
        <div className="flex items-center gap-2 border rounded-full px-7 py-3 mt-6 cursor-pointer group">
          <p className="text-lg group-hover:text-purple-400 transition">
            Show More
          </p>
          <img
            src={arrow_icon}
            alt="arrow"
            className="w-5 group-hover:translate-x-1 transition"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyWork;
