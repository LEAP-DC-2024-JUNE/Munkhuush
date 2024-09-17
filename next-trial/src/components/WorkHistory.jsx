import { WorkCard } from "./WorkCard";
import Mentorpic from "../../public/Mentor.png";
import Itoimpic from "../../public/IToim.png";
import UBCab from "../../public/ubcab.png";

export const WorkHistory = () => {
  const historycards = [
    {
      imgSrc: UBCab,
      title: "UBCab",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      chips: [
        "React",
        "Next.js",
        "TypeScript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      imgSrc: Mentorpic,
      title: "Mentorhub",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      chips: [
        "React",
        "Next.js",
        "TypeScript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      reverse: true,
    },
    {
      imgSrc: Itoimpic,
      title: "itoim",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      chips: [
        "React",
        "Next.js",
        "TypeScript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ];

  //   return (
  //     <div className="flex flex-col gap-[48px] justify-center items-center py-0 px-[32px] box-border w-[1280px] my-[96px] mx-[80px]">
  //       <div className="flex flex-col gap-[16px] items-center justify-center">
  //         <span className="text-[14px] bg-gray-200 w-[75px] h-[28px] flex justify-center items-center rounded-[12px]">
  //           Work
  //         </span>
  //         <p className="text-[20px] font-normal">
  //           Some of the noteworthy projects I have built:
  //         </p>
  //       </div>
  //       <WorkCard
  //         chips={["React", "Next.js", "Typescript"]}
  //         imgSrc={UBCab}
  //         title="UBCab"
  //         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  //       />
  //       <WorkCard
  //         chips={["React", "Next.js", "Typescript"]}
  //         reverse={true}
  //         imgSrc={Mentorpic}
  //         title="Mentorhub"
  //         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  //       />
  //       <WorkCard
  //         chips={["React", "Next.js", "Typescript"]}
  //         imgSrc={Itoimpic}
  //         title="iToim"
  //         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  //       />
  //     </div>
  //   );
  return (
    <div className="flex flex-col gap-[48px] justify-center items-center py-0 px-[32px] box-border w-[1280px] my-[96px] mx-[80px] max-[431px]:my-[0px] max-[431px]:mx-[0px] max-[431px]:py-[64px] max-[431px]:px-[16px] max-[431px]:w-[430px] max-[431px]:gap-[24px] ">
      <div className="flex flex-col gap-[16px] items-center justify-center max-[431px]:w-[343px]">
        <span className="text-[14px] bg-gray-200 w-[75px] h-[28px] flex justify-center items-center rounded-[12px] text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          Work
        </span>
        <p className="text-[20px] font-normal text-gray-600 text-center dark:text-gray-300">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      {historycards.map((card) => {
        return (
          <WorkCard
            title={card.title}
            imgSrc={card.imgSrc}
            desc={card.desc}
            chips={card.chips}
            reverse={card.reverse}
          />
        );
      })}
    </div>
  );
};
