import Image from "next/image";
import Arrow from "@/icons/arrow";
import { useTheme } from "next-themes";
export const WorkCard = ({ title, desc, imgSrc, chips, reverse }) => {
  const { theme } = useTheme();
  return (
    <div className=" min-[431px]:flex min-[431px]:w-[1152px] min-[431px]:h-[480px] box-border w-[343px] min-[431px]:drop-shadow-md min-[431px]:rounded-l-[12px] dark:bg-gray-800 min-[431px]:rounded-r-[12px] max-[431px]:rounded-t-[12px] max-[431px]:rounded-b-[12px]">
      {!reverse && (
        <div className="w-[576px] bg-gray-50 flex justify-center items-center min-[431px]:rounded-l-[12px] max-[431px]:w-[343px] max-[431px]:rounded-t-[12px] dark:bg-gray-700">
          <div className="min-[431px]:hidden max-[431px]:px-[32px] max-[431px]:py-[32px]">
            <Image src={imgSrc} />
          </div>
          <div className="max-[431px]:hidden max-[431px]:px-[32px] max-[431px]:py-[32px]">
            <Image src={imgSrc} />
          </div>
        </div>
      )}
      {reverse && (
        <div className=" min-[431px]:hidden min-[431px]:w-[576px] bg-gray-50 flex justify-center items-center  rounded-t-[12px] max-[431px]:w-[343px] dark:bg-gray-700">
          <div className="px-[32px] py-[32px]">
            <Image src={imgSrc} />
          </div>
        </div>
      )}
      <div className="min-[431px]:w-[576px] flex flex-col gap-[24px] min-[431px]:px-[48px] min-[431px]:py-[48px] min-[431px]:rounded-r-[12px] max-[431px]:py-[32px] max-[431px]:px-[32px] max-[431px]:border max-[431px]:rounded-b-[12px] max-[431px]:drop-shadow-md dark:border-none  ">
        <h1 className="text-[20px] font-semibold max-[431px]:text-[18px]">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
        <div className="flex flex-wrap  gap-[10px]">
          {chips.map((chip) => {
            return (
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px] text-[14px] text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                {chip}
              </span>
            );
          })}
        </div>
        <div>
          <Arrow theme={theme} />
        </div>
      </div>
      {reverse && (
        <div className=" max-[431px]:hidden min-[431px]:w-[576px] bg-gray-50 min-[431px]:flex min-[431px]:justify-center min-[431px]:items-center  rounded-r-[12px] dark:bg-gray-700">
          <Image src={imgSrc} />
        </div>
      )}
    </div>
  );
};
