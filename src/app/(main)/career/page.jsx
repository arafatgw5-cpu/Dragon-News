"use client";
import React from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Ltd",
    location: "Remote",
    type: "Full Time",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Creative Agency",
    location: "Dhaka",
    type: "Part Time",
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Startup Hub",
    location: "Remote",
    type: "Internship",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Join Our Team 🚀
        </h1>
        <p className="text-gray-500">
          Build your career with us. Explore exciting opportunities and grow together.
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {job.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {job.company}
            </p>

            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                📍 {job.location}
              </span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {job.type}
              </span>
            </div>

            <button className="mt-5 w-full border border-gray-300 rounded-xl py-2 text-sm hover:bg-gray-100 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold text-gray-800">
          Didn’t find a role?
        </h3>
        <p className="text-gray-500 mt-2">
          Send us your resume and we’ll get back to you.
        </p>

        <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
          Submit Resume
        </button>
      </div>
    </div>
  );
};

export default Career;