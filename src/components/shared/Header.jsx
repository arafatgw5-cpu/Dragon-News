import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Header() {
  const today = new Date();

  return (
    <header className="w-full bg-gray-100 border-b">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="The Dragon News"
            priority
            className="h-auto w-40 sm:w-56 md:w-72 lg:w-96"
          />
        </div>

        {/* Tagline */}
        <p className="mt-2 text-[10px] sm:text-xs md:text-sm tracking-wide text-gray-600">
          Journalism Without Fear or Favour
        </p>

        {/* Date */}
        <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500">
          {today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </header>
  );
}

export default Header;