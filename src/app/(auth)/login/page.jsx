"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-700">
          Login your account
        </h2>

        <hr className="mb-6" />

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email address
            </label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-700 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link href="/register" className="font-semibold text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;