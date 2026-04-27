import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Header() {
  const today = new Date();

  return (
    <header className="w-full bg-gray-100 border-b">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="The Dragon News"
            width={400}
            height={100}
            priority
            className="h-auto w-56 sm:w-72 md:w-80 lg:w-[400px]"
          />
        </div>

        <p className="mt-2 text-xs tracking-wide text-gray-600 sm:text-sm">
          Journalism Without Fear or Favour
        </p>

        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          {today.toDateString()}
        </p>
      </div>
    </header>
  );
}

export default Header;