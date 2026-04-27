"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    try {
      const result = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.photoURL,
        callbackURL: "/",
      });

      console.log("Register Success:", result);
    } catch (error) {
      console.log("Register Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
      <div className="w-full max-w-[680px] bg-white rounded-sm px-6 md:px-24 py-16 md:py-24">
        <h2 className="text-center text-[34px] font-bold text-[#3f3f3f]">
          Register your account
        </h2>

        <div className="my-14 border-t border-gray-200" />

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
          <div>
            <label className="mb-4 block text-[21px] font-bold text-[#444]">
              Your Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-[5px] bg-[#f3f3f3] px-5 py-5 text-[16px] outline-none placeholder:text-[#9c9c9c]"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-4 block text-[21px] font-bold text-[#444]">
              Photo URL
            </label>
            <input
              {...register("photoURL", { required: "Photo URL is required" })}
              type="text"
              placeholder="Enter your photo URL"
              className="w-full rounded-[5px] bg-[#f3f3f3] px-5 py-5 text-[16px] outline-none placeholder:text-[#9c9c9c]"
            />
            {errors.photoURL && (
              <p className="mt-2 text-sm text-red-500">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-4 block text-[21px] font-bold text-[#444]">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-[5px] bg-[#f3f3f3] px-5 py-5 text-[16px] outline-none placeholder:text-[#9c9c9c]"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-4 block text-[21px] font-bold text-[#444]">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-[5px] bg-[#f3f3f3] px-5 py-5 text-[16px] outline-none placeholder:text-[#9c9c9c]"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <input
              {...register("terms", {
                required: "Please accept terms and conditions",
              })}
              id="terms"
              type="checkbox"
              className="h-6 w-6 rounded border border-gray-300 accent-[#444]"
            />
            <label htmlFor="terms" className="text-[16px] text-[#6b6b6b]">
              Accept{" "}
              <span className="font-bold text-[#666]">
                Term & Conditions
              </span>
            </label>
          </div>

          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-[5px] bg-[#444] py-5 text-[20px] font-bold text-white transition hover:bg-[#333]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;