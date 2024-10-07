import Image from "next/image";
import javascript from "../../public/tech.png";
import typescript from "../../public/ts.png";

import react from "../../public/react.png";
import next from "../../public/next.png";
import node from "../../public/node.png";
import express from "../../public/express.png";
import nest from "../../public/nest.png";
import socket from "../../public/socket.png";
import postgre from "../../public/postgre.png";
import mongo from "../../public/mongo.png";
import sass from "../../public/sass.png";
import tailwind from "../../public/tailwind.png";
import figma from "../../public/figma.png";
import cypress from "../../public/cypress.png";
import storybook from "../../public/storybook.png";
import git from "../../public/git.png";

export const Skills = () => {
  return (
    <div className="py-[96px] px-[80px] max-[431px]:py-[64px] max-[431px]:px-[16px] box-border max-[431px]:flex max-[431px]:justify-center">
      <div className="flex flex-col items-center gap-[48px] max-[431px]:gap-[24px] max-[431px]:w-[343px]">
        <div className="flex flex-col gap-[16px]">
          <div className="text-center text-gray-600 font-medium">
            <span className="bg-gray-200 py-[4px] px-[20px] rounded-[12px]  dark:bg-gray-700 dark:text-gray-300">
              Skills
            </span>
          </div>
          <div className="text-[20px] text-gray-600 font-normal text-center dark:text-gray-300">
            <p>The skills, tools and technologies I am really good at:</p>
          </div>
        </div>
        <div className="box-border flex flex-col gap-[48px] justify-between max-[431px]:hidden">
          <div className="flex w-[1216px] justify-between">
            <Image src={javascript} />
            <Image src={typescript} />
            <Image src={react} />
            <Image src={next} />
            <Image src={node} />
            <Image src={express} />
            <Image src={nest} />
            <Image src={socket} />
          </div>
          <div className="flex w-[1216px] justify-between">
            <Image src={postgre} />
            <Image src={mongo} />
            <Image src={sass} />
            <Image src={tailwind} />
            <Image src={figma} />
            <Image src={cypress} />
            <Image src={storybook} />
            <Image src={git} />
          </div>
        </div>
        <div className="min-[431px]:hidden w-[343px] flex flex-col gap-[16px]">
          <div className="flex justify-between">
            <Image src={javascript} />
            <Image src={typescript} />
            <Image src={react} />
          </div>
          <div className="flex justify-between">
            <Image src={next} />
            <Image src={node} />
            <Image src={express} />
          </div>
          <div className="flex justify-between">
            <Image src={nest} />
            <Image src={socket} />
            <Image src={postgre} />
          </div>
          <div className="flex justify-between">
            <Image src={mongo} />
            <Image src={sass} />
            <Image src={tailwind} />
          </div>
          <div className="flex justify-between">
            <Image src={figma} />
            <Image src={cypress} />
            <Image src={storybook} />
          </div>
          <div className="flex">
            <Image src={git} />
          </div>
        </div>
      </div>
    </div>
  );
};
