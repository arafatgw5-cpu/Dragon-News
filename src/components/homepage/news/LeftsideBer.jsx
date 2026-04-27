"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftsideBer = ({ categories = [] }) => {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 xl:w-72">
      <div className="rounded-2xl border border-gray-200 bg-white/80 p-3 shadow-sm backdrop-blur-md lg:sticky lg:top-24">
        <h3 className="mb-3 hidden px-2 text-sm font-bold uppercase tracking-wide text-gray-500 lg:block">
          All Categories
        </h3>

        <div
          className="
            flex gap-2 overflow-x-auto scroll-smooth pb-1
            lg:flex-col lg:overflow-visible lg:pb-0
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {categories.map((category) => {
            const href = `/category/${category.category_id}`;
            const isActive = pathname === href;

            return (
              <Link
                key={category.category_id}
                href={href}
                className={`
                  group relative flex shrink-0 items-center justify-center
                  whitespace-nowrap rounded-xl border px-4 py-2.5
                  text-sm font-semibold transition-all duration-300
                  sm:px-5 lg:w-full lg:justify-start lg:px-4
                  ${
                    isActive
                      ? "border-gray-900 bg-gray-900 text-white shadow-lg shadow-gray-300"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <span
                  className={`
                    hidden h-2 w-2 rounded-full lg:mr-3 lg:block
                    ${isActive ? "bg-white" : "bg-gray-300 group-hover:bg-gray-500"}
                  `}
                />

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