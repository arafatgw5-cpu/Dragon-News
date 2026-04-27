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
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2">
        <button className="shrink-0 rounded-md bg-red-600 px-4 py-2 text-sm font-bold text-white">
          Breaking News
        </button>

        <div className="min-w-0 flex-1 overflow-hidden">
          <Marquee pauseOnHover speed={50} gradient={false}>
            {news.map((item, index) => (
              <span
                key={index}
                className="mr-16 inline-block whitespace-nowrap text-sm font-medium text-gray-700"
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