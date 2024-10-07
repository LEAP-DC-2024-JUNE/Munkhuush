import { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import { Footer, Header } from "@/components";

const SinglePost = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("selectedId");
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setSingleArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(singleArticle);

  return (
    <div>
      <Header />
      <div className="flex  flex-col items-center gap-[32px] mt-[100px] mb-[80px]">
        <div className="flex flex-col gap-[20px]">
          <div className="text-[36px] font-semibold w-[800px] ">
            {singleArticle.title}
          </div>
          <div className="flex gap-[24px]">
            <div className="flex gap-[8px]">
              <img
                className="w-[28px] h-[28px] rounded-[28px]"
                src={singleArticle.social_image}
              />
              <span>Name</span>
            </div>
            <div>{singleArticle.readable_publish_date}</div>
          </div>
        </div>
        <div>
          <img
            className="w-[800px] h-[462px] rounded-xl"
            src={singleArticle.cover_image}
          />
        </div>
        <div
          className="flex flex-col text-[20px] font-normal text-gray-600 w-[800px]"
          dangerouslySetInnerHTML={{ __html: singleArticle.body_html }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};
export default SinglePost;
