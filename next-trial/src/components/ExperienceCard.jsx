import Image from "next/image";
export const Expcard = ({ title, descriptions, date, pic }) => {
  return (
    <div className="box-border w-[896px] bg-white px-[32px] py-[32px] rounded-[12px] drop-shadow-md max-[431px]:w-[343px] dark:bg-gray-800 ">
      <div className="flex justify-between max-[431px]:hidden">
        <div>
          <Image src={pic} />
        </div>
        <div className="box-border w-[384px] flex flex-col gap-[16px]">
          <h1 className="font-semibold text-[20px]">{title}</h1>
          <div className="text-gray-600 flex flex-col gap-[4px] dark:text-gray-300">
            {descriptions.map((desc) => {
              return <li>{desc}</li>;
            })}
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-300 ">
          <span>{date}</span>
        </div>
      </div>
      <div className="min-[431px]:hidden flex flex-col gap-[16px]">
        <div>
          <Image src={pic} />
        </div>
        <div className="text-gray-600 dark:text-gray-300">
          <span>{date}</span>
        </div>
        <div className="box-border w-[279px] flex flex-col gap-[16px]">
          <h1 className="font-semibold text-[18px]">{title}</h1>
          <div className="text-gray-600 flex flex-col gap-[4px] dark:text-gray-300">
            {descriptions.map((desc) => {
              return <li>{desc}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
