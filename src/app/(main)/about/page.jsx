"use client";

import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* 🔥 Hero Section */}
        <div className="text-center space-y-4">
          <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Arafat"
            alt="profile"
            className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hi, I'm Arafat 👋
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            I’m a passionate Frontend Developer from Bangladesh 🇧🇩.
            I build modern, fast and user-friendly web applications using
            React & Next.js.
          </p>
        </div>

        {/* 📌 About + Skills */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* About */}
          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              🚀 About Me
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              I love building clean and responsive UI. Currently learning
              advanced React, Next.js and exploring backend technologies.
              My goal is to become a Full Stack Developer and get a job
              in a top company.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              🛠 Skills
            </h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind",
                "Firebase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 📊 Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded-xl shadow border">
            <h3 className="text-2xl font-bold text-blue-500">10+</h3>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border">
            <h3 className="text-2xl font-bold text-green-500">1+</h3>
            <p className="text-sm text-gray-500">Years Learning</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border">
            <h3 className="text-2xl font-bold text-purple-500">100%</h3>
            <p className="text-sm text-gray-500">Passion</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border">
            <h3 className="text-2xl font-bold text-pink-500">∞</h3>
            <p className="text-sm text-gray-500">Dream</p>
          </div>
        </div>

        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="#"
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="#"
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaFacebook size={20} />
          </a>

          <a
            href="mailto:your@email.com"
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;