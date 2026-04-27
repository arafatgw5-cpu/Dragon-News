"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftsideBer = ({ categories }) => {
  const pathname = usePathname();

  return (
    <div className="space-y-2 sticky top-0">
      {categories.map((category) => {
        const href = `/category/${category.category_id}`;
        const isActive = pathname === href;

        return (
          <Link
            key={category.category_id}
            href={href}
            className={`block px-4 py-2 rounded-lg shadow-sm transition ${
              isActive
                ? "bg-gray-900 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category.category_name}
          </Link>
        );
      })}
    </div>
  );
};

export default LeftsideBer;