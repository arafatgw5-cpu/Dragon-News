"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const RightSideBer = () => {

  const handleGoogle = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // 🔥 important
      });

      if (error) {
        console.error("Google Login Error:", error);
        return;
      }

      console.log("Google Login Success:", data);
    } catch (err) {
      console.error("Google Catch Error:", err);
    }
  };

  const handleGithub = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/", // 🔥 important
      });

      if (error) {
        console.error("GitHub Login Error:", error);
        return;
      }

      console.log("GitHub Login Success:", data);
    } catch (err) {
      console.error("GitHub Catch Error:", err);
    }
  };

  return (
    <div className="space-y-3 sticky top-0">
      <h2 className="text-xl font-semibold text-gray-700">
        Login With
      </h2>

      {/* Google */}
      <button
        onClick={handleGoogle}
        className="w-full flex items-center justify-center gap-2 border border-blue-400 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition"
      >
        <FcGoogle className="text-xl" />
        Login with Google
      </button>

      {/* GitHub */}
      <button
        onClick={handleGithub}
        className="w-full flex items-center justify-center gap-2 border border-gray-400 text-gray-800 py-2 rounded-md hover:bg-gray-100 transition"
      >
        <FaGithub className="text-xl" />
        Login with Github
      </button>
    </div>
  );
};

export default RightSideBer;