export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.data?.news_category || [];
};

export const getNews = async (category_id) => {
    console.log(category_id)
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.data || [];
};


export const getSingleNews = async (news_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.data?.[0];
};





