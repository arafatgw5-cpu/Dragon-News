"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftsideBer = ({ categories = [] }) => {
  const pathname = usePathname();

  return (
    <aside className="w-full flex flex-col justify-center">
      <div className="w-full rounded-2xl border border-gray-200 bg-white p-3 shadow-sm lg:sticky lg:top-24">
        <h3 className="mb-3 px-2 text-sm font-bold uppercase tracking-wide text-gray-500">
          All Categories
        </h3>

        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const href = `/category/${category.category_id}`;
            const isActive = pathname === href;

            return (
              <Link
                key={category.category_id}
                href={href}
                className={`flex shrink-0 items-center whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-semibold transition lg:w-full ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.category_name}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default LeftsideBer;