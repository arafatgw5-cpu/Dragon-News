"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        console.log("Login Error:", error);
        return;
      }

      console.log("Login Success:", res);
    } catch (err) {
      console.log("Something went wrong:", err);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-[420px] rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Login Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:bg-white focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:border-gray-400 focus:ring-gray-200"
              }`}
            />

            {errors.email && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Enter your password"
              className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:bg-white focus:ring-2 ${
                errors.password
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:border-gray-400 focus:ring-gray-200"
              }`}
            />

            {errors.password && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gray-800 py-3 text-sm font-bold text-white shadow-md transition hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-red-500 transition hover:text-red-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LogInPage;