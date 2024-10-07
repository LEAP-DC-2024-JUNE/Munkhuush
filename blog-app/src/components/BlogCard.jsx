import Image from "next/image";
import Link from "next/link";
export const BlogCard = ({ pic, chips, title, profilePic, name, date, id }) => {
  return (
    <Link href={{ pathname: "/blog/single-post", query: { selectedId: id } }}>
      <div>
        <div className="w-[392px] h-[488px] px-[16px] py-[16px] box-border border-[1px] flex flex-col gap-[16px] rounded-xl">
          <div className="w-[360px] h-[240px] rounded-xl bg-blue-300">
            <img src={pic} className="h-[240px] rounded-xl" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <span className="flex items-center px-[10px] py-[4px] text-blue-400 font-medium bg-gray-100 rounded-[6px] w-fit h-[28px] ">
                {chips}
              </span>
              <p className="text-[24px] font-semibold">{title}</p>
            </div>
            <div className="flex gap-[20px] items-center">
              <div className="flex gap-[12px] items-center">
                {/* <div className="bg-yellow-200 rounded-full w-[36px] h-[36px]"></div> */}
                <img
                  className="rounded-full w-[36px] h-[36px]"
                  src={profilePic}
                />
                <span className="text-gray-400 font-medium">{name}</span>
              </div>
              <span className="text-gray-400 font-medium">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
