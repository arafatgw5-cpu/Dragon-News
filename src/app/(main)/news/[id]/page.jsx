import { getSingleNews } from "@/app/lib/data";
import Link from "next/link";

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const news = await getSingleNews(id);

  if (!news) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">News Not Found</h2>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">

        <div className="relative">
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-[260px] md:h-[420px] object-cover"
          />

          <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
            Category #{news.category_id}
          </span>
        </div>

        <div className="p-5 md:p-8 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            {news.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-y py-4">
            <div className="flex items-center gap-4">
              <img
                src={news.author?.img}
                alt={news.author?.name || "Author"}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-pink-100"
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  {news.author?.name || "Unknown Author"}
                </h3>
                <p className="text-sm text-gray-500">
                  Published: {news.author?.published_date?.slice(0, 10) || "No Date"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                ⭐ {news.rating?.number || 0} {news.rating?.badge}
              </span>

              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                👁 {news.total_view || 0} views
              </span>
            </div>
          </div>

          <p className="text-gray-700 text-base leading-8">
            {news.details}
          </p>

          <div className="pt-4">
           <Link href={`/category/${news.category_id}`} className="inline-block">
              <button className="px-6 py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition">
                Back to News this catagory
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;