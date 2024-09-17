const { default: Link } = require("next/link");
import Logo from "@/icons/icon";
import Toggle from "@/icons/toggler";
`import { useTheme } from "next-themes";`;
import Menu from "@/icons/menucon";

function Bar() {
  const { setTheme, theme } = useTheme();
  console.log(theme);
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="flex justify-between min-[431px]:mx-[112px] min-[431px]:my-[16px] items-center max-[431px]:py-[16px] max-[431px]:px-[48px]">
      <Logo theme={theme} />
      <div className="min-[431px]:hidden">
        <Menu theme={theme} />
      </div>

      <div className="flex gap-12 list-none items-center max-[431px]:hidden">
        <div className="flex gap-6">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </div>
        <div className="flex gap-4">
          <Toggle theme={theme} toggle={toggleTheme} />
          <button className="bg-black text-white px-[16px] py-[6px] rounded-xl dark:bg-white dark:text-black">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
export default Bar;
