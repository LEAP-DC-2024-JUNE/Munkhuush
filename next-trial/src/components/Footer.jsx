import Squarecon from "@/icons/squarecon";
import Phonecon from "@/icons/phonecon";
import Emailcon from "@/icons/emailcon";
import Socialmedia from "@/icons/socialMedia";
import { useTheme } from "next-themes";
import DarkModeSocial from "@/icons/socialMediaDarkMode";
import DarkModeEmail from "@/icons/emailDarkMode";
import DarkModeSquare from "@/icons/squareDarkMode";
import DarkModePhone from "@/icons/phoneDarkMode";
export const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="px-[80px] py-[96px] max-[431px]:px-[16px] max-[431px]:py-[64px] max-[431px]:flex max-[431px]:justify-center">
      <div className="w-[1280px] min-[431px]:px-[32px] flex flex-col gap-[48px] items-center max-[431px]:w-[343px]">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <span className="bg-gray-200 py-[4px] px-[20px] rounded-[12px] text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            Get in touch
          </span>
          <p className="w-[576px] text-[20px] text-center text-gray-600 max-[431px]:w-[343px] dark:text-gray-300 ">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] max-[431px]:w-[252px]">
          <div className="flex gap-[20px] items-center max-[431px]:gap-[16px]">
            {theme == "dark" ? <DarkModeEmail /> : <Emailcon />}
            <h1 className="font-semibold text-[36px] max-[431px]:text-[16px]">
              tom@pinecone.mn
            </h1>
            {theme == "dark" ? <DarkModeSquare /> : <Squarecon />}
          </div>
          <div className="flex gap-[20px] items-center max-[431px]:gap-[16px]">
            {theme == "dark" ? <DarkModePhone /> : <Phonecon />}
            <h1 className="font-semibold text-[36px] max-[431px]:text-[16px]">
              +976 88112233
            </h1>
            {theme == "dark" ? <DarkModeSquare /> : <Squarecon />}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[8px] text-gray-600 dark:text-gray-300">
          <p>You may also find me on these platforms!</p>
          {theme == "dark" ? <DarkModeSocial /> : <Socialmedia />}
        </div>
      </div>
    </div>
  );
};
