import Link from "next/link";

export const CarouselCard = ({ article }) => {
  if (!article) {
    return null;
  }

  return (
    <Link
      className="hover:shadow-xl rounded-xl hover:border-[1px]"
      href={`/blog/${article.id}`}
    >
      <div className="flex justify-center">
        <div className="flex flex-col items-start justify-end ">
          <img
            className="w-[1215px] h-[600px] rounded-xl relative "
            src={article.social_image}
          />
          <div className="border-[1px] absolute bg-white w-[598px] h-[252px] rounded-xl ml-[11px] mb-[13px] py-[40px] px-[40px] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <span className="flex items-center px-[10px] py-[4px] text-white font-medium bg-blue-400 rounded-[6px] w-fit h-[28px] ">
                {article.user.username}
              </span>
              <p className="text-[28px] font-semibold h-[84px] ">
                {article.title.length > 50
                  ? article.title.slice(0, 50) + "..."
                  : article.title}
              </p>
            </div>
            <div className="text-[16px] text-gray-400">
              {article.readable_publish_date + ", 2024"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
