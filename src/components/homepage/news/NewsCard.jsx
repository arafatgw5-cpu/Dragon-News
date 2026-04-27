import Link from "next/link";
import { Bookmark, Share2, Eye } from "lucide-react";

const NewsCard = ({ news }) => {
  return (
    <div className="col-span-12 lg:col-span-6 space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
        Dragon News Home
      </h1>

      {!news || news.length === 0 ? (
        <div className="bg-white border rounded-2xl p-6 sm:p-10 text-center shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            No News Found
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            এই category তে এখন কোনো news পাওয়া যায়নি।
          </p>
        </div>
      ) : (
        news.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl border shadow-sm overflow-hidden"
          >
            {/* Author */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-100 px-3 sm:px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src={item.author?.img}
                  alt={item.author?.name || "Author"}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item.author?.name || "Unknown Author"}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.author?.published_date?.slice(0, 10) || "No Date"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-500 self-end sm:self-auto">
                <Bookmark size={18} />
                <Share2 size={18} />
              </div>
            </div>

            {/* Title */}
            <div className="px-3 sm:px-4 pt-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                {item.title}
              </h2>
            </div>

            {/* Image */}
            <div className="p-3 sm:p-4">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-44 sm:h-56 md:h-60 object-cover rounded-lg"
              />
            </div>

            {/* Details */}
            <div className="px-3 sm:px-4 pb-4 text-gray-600 text-sm leading-relaxed">
              <p>{item.details?.slice(0, 180)}...</p>

              <Link
                href={`/news/${item._id}`}
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                View Details →
              </Link>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 sm:px-4 py-3 border-t">
              <div className="flex items-center gap-1 text-orange-500 text-sm sm:text-base">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

                <span className="text-gray-700 ml-2 font-medium">
                  {item.rating?.number || 0}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
                <Eye size={18} />
                <span>{item.total_view || 0}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsCard;