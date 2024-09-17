import { Expcard } from "./ExperienceCard";
import Upwork from "../../public/logo-upwork.png";
export const Experience = () => {
  const expcards = [
    {
      title: "Sr. Frontend Developer",
      desc: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Nov 2021 - Present",
      pic: Upwork,
    },
    {
      title: "Team Lead",
      desc: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Jul 2017 - Oct 2021",
      pic: Upwork,
    },
    {
      title: "Sr. Frontend Developer",
      desc: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Dec 2015 - May 2017",
      pic: Upwork,
    },
  ];
  return (
    <div className="bg-gray-50 py-[96px] px-[80px] max-[431px]:py-[64px] max-[431px]:px-[16px] max-[431px]:flex max-[431px]:flex-col max-[431px]:items-center dark:bg-gray-900">
      <div className="bg-gray-50 flex flex-col gap-[48px] justify-center items-center py-0 px-[32px] box-border w-[1280px] max-[431px]:px-[0px] max-[431px]:w-[343px] dark:bg-gray-900 ">
        <div className="flex flex-col gap-[16px] items-center justify-center">
          <span className="text-[14px] bg-gray-200 w-[115px] h-[28px] flex justify-center items-center rounded-[12px] text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            Experience
          </span>
          <p className="text-[20px] font-normal text-gray-600 dark:text-gray-300">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        {expcards.map((expcard) => {
          return (
            <Expcard
              pic={expcard.pic}
              title={expcard.title}
              descriptions={expcard.desc}
              date={expcard.date}
            />
          );
        })}
      </div>
    </div>
  );
};
