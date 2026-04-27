import Link from "next/link";
import { Bookmark, Share2, Eye } from "lucide-react";

const NewsCard = ({ news }) => {
  return (
    <div className="col-span-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dragon News Home</h1>

      {!news || news.length === 0 ? (
        <div className="bg-white border rounded-2xl p-10 text-center shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">No News Found</h2>
          <p className="text-gray-500 mt-2">
            এই category তে এখন কোনো news পাওয়া যায়নি।
          </p>
        </div>
      ) : (
        news.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl border shadow-sm overflow-hidden"
          >
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src={item.author?.img}
                  alt={item.author?.name || "Author"}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-800">
                    {item.author?.name || "Unknown Author"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.author?.published_date?.slice(0, 10) || "No Date"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-500">
                <Bookmark size={18} />
                <Share2 size={18} />
              </div>
            </div>

            <div className="px-4 pt-4">
              <h2 className="text-xl font-bold text-gray-900 leading-snug">
                {item.title}
              </h2>
            </div>

            <div className="p-4">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>

            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
              <p>{item.details?.slice(0, 180)}...</p>

              <Link
                href={`/news/${item._id}`}
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                View Details →
              </Link>
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-t">
              <div className="flex items-center gap-2 text-orange-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

                <span className="text-gray-700 ml-2 font-medium">
                  {item.rating?.number || 0}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
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