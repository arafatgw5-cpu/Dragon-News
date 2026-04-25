import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Header() {
  const today = new Date();

  return (
    <div className="bg-gray-100 py-6 border-b text-center">
      
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src={logo}
          alt="The Dragon News"
          width={400}
          height={100}
        />
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 mt-2 tracking-wide">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="text-sm text-gray-500 mt-2">
        {today.toDateString()}
      </p>
    </div>
  );
}

export default Header;