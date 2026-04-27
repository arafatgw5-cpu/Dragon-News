"use client";

import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    "🇧🇩 Rain likely to ease heat across parts of Bangladesh",
    "🇧🇩 Bangladesh among world’s top 10 food crisis countries",
    "🌍 US hopes for progress, but Iran says no direct talks",
    "🌍 ASEAN urges inclusive dialogue after Myanmar prisoner release",
  ];

  return (
    <section className="w-full border-y border-red-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:py-2">
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />

          <button
            type="button"
            className="shrink-0 rounded-md bg-red-600 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm sm:px-4 sm:text-sm"
          >
            Breaking News
          </button>
        </div>

        {/* Marquee */}
        <div className="min-w-0 flex-1 overflow-hidden rounded-md bg-red-50 px-2 py-2 sm:bg-transparent sm:px-0 sm:py-0">
          <Marquee pauseOnHover speed={45} gradient={false}>
            {news.map((item, index) => (
              <span
                key={index}
                className="mr-10 inline-block whitespace-nowrap text-xs font-medium text-gray-700 sm:mr-16 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;