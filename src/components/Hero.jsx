"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 text-center px-5 pt-24"
>
  
        <img
          src="/profile.jpg"
          alt="Emaan Imran"
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-sky-400 shadow-2xl object-cover"
        />

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          Emaan Imran
        </h1>

        {/* Role */}
        <h2 className="text-sky-300 text-2xl md:text-3xl mt-4 font-semibold">
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="text-gray-200 max-w-2xl mx-auto mt-6 text-lg leading-8">
          BSCS Student passionate about building modern web applications using
          React, Next.js, Node.js, Express.js, MongoDB and Flutter.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-sky-500 hover:bg-sky-600 px-8 py-3 rounded-lg text-white font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="border-2 border-sky-400 hover:bg-sky-500 px-8 py-3 rounded-lg text-white font-semibold transition"
          >
            Download CV
          </a>
        </div>

       
      </motion.div>
    </section>
  );
}