// import Intropic from "@/pics/Intropic";
import Location from "@/icons/location";
import Greendot from "@/icons/greenDot";
import Socialmedia from "@/icons/socialMedia";
import Intropic from "../pics/Intropic";
import { useTheme } from "next-themes";
import DarkModeLocation from "@/icons/locationDarkMode";
import DarkModeSocial from "@/icons/socialMediaDarkMode";

function Intro() {
  const { theme } = useTheme();
  return (
    <div className="box-border py-[96px] px-[80px] max-[431px]:py-[64px] max-[431px]:px-[16px]">
      <div className="flex w-[1280px] px-[32px] gap-[48px] max-[431px]:flex-col-reverse max-[431px]:w-[343px]">
        <div className="w-[600px] flex flex-col gap-[48px] max-[431px]:w-[343px]">
          <div>
            <h1 className="text-[60px] font-bold max-[431px]:text-[36px] max-[431px]:font-semibold">
              Hi, I'm Tom 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="flex flex-col gap-[8px] text-gray-600 dark:text-white">
            <div className="flex gap-[8px]">
              {theme == "dark" ? <DarkModeLocation /> : <Location />}
              <p>Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex gap-[8px]">
              <Greendot />
              <p> Available for new projects</p>
            </div>
          </div>
          {theme == "dark" ? <DarkModeSocial /> : <Socialmedia />}
        </div>
        <div className="w-[568px] flex max-[431px]:w-[343px]">
          <div className="w-[248px] max-[431px]:hidden"></div>
          <Intropic />
        </div>
      </div>
    </div>
  );
}

export default Intro;
