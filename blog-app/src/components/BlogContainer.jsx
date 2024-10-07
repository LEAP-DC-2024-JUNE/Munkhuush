// import { useState, useEffect } from "react";

// export const BlogContainer = () => {
//   const [articles, setArticles] = useState([]);
//   const FetchData = () => {
//     fetch("https://dev.to/api/articles")
//       .then((response) => response.json())
//       .then((data) => setArticles(data));
//   };
//   useEffect(() => {
//     FetchData();
//   }, []);
//   console.log(articles);

//   return (
//     <div>
//       {articles.map((article) => {
//         return (
//           <div className="w-[392px] h-[488px] px-[16px] py-[16px] box-border border-[1px] flex flex-col gap-[16px] rounded-xl">
//             <img src={article.social_image} />
//             <div className="flex flex-col gap-[20px]">
//               <div className="flex flex-col gap-[16px]">
//                 <span className="text-center px-[10px] py-[4px] text-blue-400 font-medium bg-gray-100 rounded-[6px] w-[97px] h-[28px]">
//                   {article.user.username}
//                 </span>
//                 <p className="text-[24px] font-semibold">{article.title}</p>
//               </div>
//               <div className="flex gap-[20px]">
//                 <div className="flex gap-[12px]">
//                   <img src={article.user.profile_image} />
//                   <span className="text-gray-400 font-medium">
//                     {article.user.name}
//                   </span>
//                 </div>
//                 <span className="text-gray-400 font-medium">
//                   {article.readable_publish_date}
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import Image from "next/image";
import notFound from "../../public/no-results-page.png";

export const BlogContainer = ({ inputValue }) => {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(12);
  const [category, setCategory] = useState("");

  const FetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${count}&tag=${category}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    FetchData();
  }, [count, category]);

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(inputValue.toLowerCase());
  });
  const loadMore = () => {
    setCount(count + 3);
  };
  const filterCategory = (param1) => {
    setCategory(param1);
  };
  const loadAll = () => {
    setCount(30);
  };

  return (
    <div className="flex flex-col items-center gap-[32px] mt-[48px]">
      <div className="flex flex-col gap-[32px] w-[1215px]">
        <div className="text-[24px] font-bold">All Blog Post</div>
        <div className="flex  justify-between text-[12px] font-bold ">
          <div className="flex gap-[20px] ">
            <span
              onClick={() => filterCategory("")}
              className="hover:text-gray-400 hover:cursor-pointer"
            >
              All
            </span>
            <span
              onClick={() => filterCategory("javascript")}
              className="hover:text-gray-400 hover:cursor-pointer"
            >
              Javascript
            </span>
            <span
              onClick={() => filterCategory("css")}
              className="hover:text-gray-400 hover:cursor-pointer"
            >
              Css
            </span>
            <span
              onClick={() => filterCategory("nextjs")}
              className="hover:text-gray-400 hover:cursor-pointer"
            >
              Nextjs
            </span>
            <span className="hover:text-gray-400 hover:cursor-pointer">
              Technology
            </span>
            <span className="hover:text-gray-400 hover:cursor-pointer">
              Branding
            </span>
          </div>
          <div
            onClick={loadAll}
            className="hover:text-gray-400 hover:cursor-pointer"
          >
            View All
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-[32px] mb-[32px]">
        <div className="w-[1440px] flex flex-wrap gap-[20px] px-[112px]">
          {filteredArticles.length !== 0 ? (
            filteredArticles.map((article) => {
              return (
                <div>
                  <BlogCard
                    id={article.id}
                    pic={article.cover_image}
                    chips={article.user.username}
                    title={article.title}
                    profilePic={article.user.profile_image}
                    name={article.user.name}
                    date={article.readable_publish_date}
                  />
                </div>
              );
            })
          ) : (
            <div className="w-[1215px] flex justify-center">
              <Image src={notFound} />
            </div>
          )}
        </div>

        <div className="w-[1440px] text-center">
          <button
            onClick={loadMore}
            className="border-[1px] px-[20px] py-[12px] rounded-md text-gray-500 font-medium"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
