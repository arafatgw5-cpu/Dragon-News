import { getCategories, getNews } from "@/app/lib/data";
import LeftsideBer from "@/components/homepage/news/LeftsideBer";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBer from "@/components/homepage/news/RightSideBer";

const HomePage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNews(id || "01");

  return (
    <div className="grid grid-cols-1 md:grid-cols-12  w-full gap-4">
      {/* Left Sidebar */}
      <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
          All Category
        </h2>

        <LeftsideBer categories={categories} />
      </div>

      {/* Main News */}
     <div className="md:col-span-6"> <NewsCard  news={news} /></div>

      {/* Right Sidebar */}
      <div className="md:col-span-3 items-justify-center w-full  p-5 rounded-xl shadow">
        <RightSideBer />
      </div>
    </div>
  );
};

export default HomePage;