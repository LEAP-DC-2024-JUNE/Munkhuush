import Image from "next/image";
import Link from "next/link";
export const BlogCard = ({ pic, chips, title, profilePic, name, date, id }) => {
  return (
    // <Link href={{ pathname: "/blog/single-post", query: { selectedId: id } }}>
    <Link href={`/blog/${id}`}>
      <div className="hover:shadow-2xl rounded-xl ">
        <div className="w-[392px] h-[488px] px-[16px] py-[16px] box-border border-[1px] flex flex-col gap-[16px] rounded-xl">
          <div className="w-[360px] h-[240px] rounded-xl bg-blue-300">
            <img src={pic} className="h-[240px] rounded-xl" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <span className="flex items-center px-[10px] py-[4px] text-blue-400 font-medium bg-gray-100 rounded-[6px] w-fit h-[28px] ">
                {chips}
              </span>
              <p className="text-[24px] font-semibold h-[72px]">
                {title.length > 50 ? title.slice(0, 50) + "..." : title}
                {/* {title.slice(0, 30) + "..."} */}
              </p>
            </div>
            <div className="flex gap-[70px] items-center">
              <div className="flex gap-[12px] items-center w-[175px]">
                {/* <div className="bg-yellow-200 rounded-full w-[36px] h-[36px]"></div> */}
                <img
                  className="rounded-full w-[36px] h-[36px]"
                  src={profilePic}
                />
                <span className="text-gray-400 font-medium">{name}</span>
              </div>
              <span className="text-gray-400 font-medium ">
                {date + ", 2024"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
