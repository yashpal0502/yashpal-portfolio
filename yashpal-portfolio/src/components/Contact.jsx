import React, { useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import { MailIcon, MapPinIcon } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "motion/react";

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
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      id="contact"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
      className="flex flex-col items-center gap-12 py-16 px-6 md:px-20 text-white"
    >
      {/* Title */}
      <motion.div variants={fadeUp} className="relative">
        <h1 className="py-6 text-4xl md:text-5xl font-semibold">
          Get In Touch
        </h1>
        <img
          src={theme_pattern}
          alt="theme-pattern"
          className="absolute bottom-0 right-0 z-[-1] opacity-40"
        />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* LEFT */}
        <motion.div
          variants={fadeLeft}
          className="flex flex-col gap-6 md:w-1/2"
        >
          <h2 className="text-2xl font-semibold">Let's talk</h2>

          <p className="text-gray-400 leading-relaxed">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on.
          </p>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-300">
              <MailIcon className="text-[#ff7a18]" />
              <p>yashpalwork05@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <MapPinIcon className="text-[#ff7a18]" />
              <p>Gurgaon, India</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          variants={fadeRight}
          onSubmit={onSubmit}
          className="flex flex-col gap-4 md:w-1/2 
          bg-white/5 backdrop-blur-lg p-6 rounded-2xl 
          border border-white/10 shadow-lg"
        >
          <label className="text-sm text-gray-300">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            className="p-3 rounded bg-[#111] border border-white/10 
            focus:outline-none focus:border-[#ff7a18] transition"
            required
          />

          <label className="text-sm text-gray-300">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="p-3 rounded bg-[#111] border border-white/10 
            focus:outline-none focus:border-[#ff7a18] transition"
            required
          />

          <label className="text-sm text-gray-300">Your Message</label>
          <textarea
            rows={6}
            name="message"
            placeholder="Write your message..."
            className="p-3 rounded bg-[#111] border border-white/10 
            focus:outline-none focus:border-[#ff7a18] transition"
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="relative mt-4 px-6 py-3 rounded-full font-medium
            bg-gradient-to-r from-[#ff7a18] to-[#ff3c00]
            hover:scale-105 hover:shadow-[0_0_25px_rgba(255,120,0,0.6)]
            transition duration-300 disabled:opacity-50"
          >
            {loading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
