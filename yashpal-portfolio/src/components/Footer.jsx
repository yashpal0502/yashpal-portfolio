import React from "react";
import footer_logo from "../assets/footer_logo.svg";
import logo from "../assets/logo.svg";
import { User2Icon } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 px-6 md:px-20 py-10 text-white bg-gradient-to-r from-[#0d0d0d] via-[#1a0f0a] to-[#2b140a] border-t border-[#ff7a18]/20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <img src={logo} alt="logo" className="w-36" />

          <p className="text-gray-400 leading-relaxed">
            Passionate developer focused on building responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* Right (Subscribe) */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex items-center bg-gray-900 rounded-full px-4 py-2 border border-gray-700 focus-within:border-orange-500">
            <User2Icon className="text-gray-400 mr-2" />

            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <button className="w-fit px-6 py-2 rounded-full bg-orange-500 hover:shadow-[0_0_20px_rgba(255,120,0,0.3)] hover:scale-105 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>
          Copyright {new Date().getFullYear()} ©{" "}
          <span className="text-white font-medium">Yashpal</span>. All Rights
          Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="cursor-pointer hover:text-white transition">
            Terms of Services
          </a>

          <a href="#" className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </a>

          <a
            href="#contact"
            className="cursor-pointer hover:text-white transition"
          >
            Connect with me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
