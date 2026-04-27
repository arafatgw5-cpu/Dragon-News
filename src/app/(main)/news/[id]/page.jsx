import { getSingleNews } from "@/app/lib/data";
import Link from "next/link";

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const news = await getSingleNews(id);

  if (!news) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-red-500 text-center">
          News Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white shadow-md sm:shadow-lg">
        {/* Image */}
        <div className="relative">
          <img
            src={news.image_url}
            alt={news.title}
            className="h-[220px] w-full object-cover sm:h-[300px] md:h-[420px]"
          />

          <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-pink-600 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold text-white">
            Category #{news.category_id}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-5 p-4 sm:p-6 md:p-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight text-gray-900">
            {news.title}
          </h1>

          {/* Author + Stats */}
          <div className="flex flex-col gap-4 border-y py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={news.author?.img}
                alt={news.author?.name || "Author"}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-pink-100"
              />

              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {news.author?.name || "Unknown Author"}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Published:{" "}
                  {news.author?.published_date?.slice(0, 10) || "No Date"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="rounded-full bg-orange-50 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-orange-600">
                ⭐ {news.rating?.number || 0} {news.rating?.badge}
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-blue-600">
                👁 {news.total_view || 0} views
              </span>
            </div>
          </div>

          {/* Details */}
          <p className="text-sm sm:text-base leading-7 sm:leading-8 text-gray-700">
            {news.details}
          </p>

          {/* Button */}
          <div className="pt-2 sm:pt-4">
            <Link
              href={`/category/${news.category_id}`}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-pink-600 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-pink-700"
            >
              Back to this Category
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;