import React, { useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const emailKey = import.meta.env.VITE_EMAIL_KEY;

  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", emailKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully");
        event.target.reset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Network error!");
    } finally {
      setLoading(false);
    }

    // setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-12 py-16 px-6 md:px-20 text-white"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="py-6 text-4xl md:text-5xl font-semibold">
          Get In Touch
        </h1>
        <img
          src={theme_pattern}
          alt="theme-pattern"
          className="absolute bottom-0 right-0 z-[-1] opacity-40"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* Left Side */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="text-2xl font-semibold">Let's talk</h2>

          <p className="text-gray-400 leading-relaxed">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MailIcon />
              <p>yourmail@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <PhoneCallIcon />
              <p>+91 12345 67890</p>
            </div>

            <div className="flex items-center gap-3">
              <MapPinIcon />
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4 md:w-1/2">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="name"
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            name="email"
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
            required
          />

          <label>Your Message</label>
          <textarea
            rows={6}
            placeholder="Write your message..."
            name="message"
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="relative mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:scale-105 transition duration-300 disabled:opacity-50"
          >
            {loading && (
              <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}

            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
