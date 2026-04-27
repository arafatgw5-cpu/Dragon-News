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
        callbackURL: "/",
      });

      if (error) return console.error("Google Login Error:", error);
      console.log("Google Login Success:", data);
    } catch (err) {
      console.error("Google Catch Error:", err);
    }
  };

  const handleGithub = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (error) return console.error("GitHub Login Error:", error);
      console.log("GitHub Login Success:", data);
    } catch (err) {
      console.error("GitHub Catch Error:", err);
    }
  };

  return (
    <aside className="w-full lg:sticky lg:top-24">
      <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm backdrop-blur-md sm:p-5 lg:p-4 xl:p-5">
        <div className="mb-5 text-center lg:text-left">
          <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
            Login With
          </h2>
          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Continue using your social account
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <button
            type="button"
            onClick={handleGoogle}
            className="
              group flex w-full items-center justify-center gap-3
              rounded-xl border border-gray-200 bg-gray-50 px-4 py-3
              text-sm font-semibold text-gray-700 shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md
              active:scale-[0.98]
              sm:text-base lg:text-sm xl:text-base
            "
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <FcGoogle className="text-xl" />
            </span>
            <span>Login with Google</span>
          </button>

          <button
            type="button"
            onClick={handleGithub}
            className="
              group flex w-full items-center justify-center gap-3
              rounded-xl border border-gray-200 bg-gray-900 px-4 py-3
              text-sm font-semibold text-white shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5 hover:bg-black hover:shadow-md
              active:scale-[0.98]
              sm:text-base lg:text-sm xl:text-base
            "
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm">
              <FaGithub className="text-xl" />
            </span>
            <span>Login with Github</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RightSideBer;