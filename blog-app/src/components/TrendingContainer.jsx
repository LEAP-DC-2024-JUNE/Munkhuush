import { useState, useEffect } from "react";
import { TrendingCard } from "./TrendingCard";

export const TrendingContainer = () => {
  const [articles, setArticles] = useState([]);
  const FetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&tag=trending")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className=" flex flex-col items-center gap-[30px] my-[100px] ">
      <h1 className="w-[1215px] text-[28px] font-bold">Trending</h1>
      <div className="flex gap-[20px] justify-center">
        {articles.map((article) => {
          return (
            <div>
              <TrendingCard
                pic={article.social_image}
                title={article.title}
                chips={article.user.username}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
