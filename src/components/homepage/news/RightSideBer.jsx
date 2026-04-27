"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const RightSideBer = () => {
  const handleSocialLogin = async (provider) => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });

      if (error) return console.error(`${provider} Login Error:`, error);

      console.log(`${provider} Login Success:`, data);
    } catch (err) {
      console.error(`${provider} Catch Error:`, err);
    }
  };

  return (
    <aside className="w-full ">
      <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
        <div className="mb-5 text-center lg:text-left">
          <h2 className="text-lg font-bold text-gray-800">Login With</h2>
          <p className="mt-1 text-sm text-gray-500">
            Continue using your social account
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-blue-50"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
              <FcGoogle className="text-xl" />
            </span>
            <span>Login with Google</span>
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin("github")}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-900 bg-gray-900 px-3 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm">
              <FaGithub className="text-xl" />
            </span>
            <span>Login with GitHub</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RightSideBer;