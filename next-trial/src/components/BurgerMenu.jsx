import Logo from "@/icons/icon";
import Close from "@/icons/closeBtn";
import Toggle from "@/icons/toggler";
import Intro from "./Intro";
import { useState } from "react";
import Bar from "./Header";
import { useTheme } from "next-themes";
import DarkModeCloseBtn from "@/icons/closeBtnDarkMode";
import DarkModeLogo from "@/icons/logoDarkMode";
import DarkModeToggler from "@/icons/togglerDarkMode";

export const BurgerMenu = ({ closeMenu, isOpen }) => {
  console.log(isOpen);
  const { setTheme, theme } = useTheme();
  // const [isOpen, setisOpen] = useState(true);
  // const CloseMenu = () => {
  //   setisOpen(false);
  // };
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 w-[430px] bg-gray-200 flex justify-end h-[667px] z-10">
          <div className=" dark:bg-black    w-[375px] bg-white drop-shadow-2xl text-gray-600 dark:text-gray-300">
            <div className="flex justify-between py-[16px] px-[48px]">
              {theme == "dark" ? <DarkModeLogo /> : <Logo />}
              <div onClick={closeMenu}>
                {theme == "dark" ? <DarkModeCloseBtn /> : <Close />}
              </div>
            </div>
            <div className="py-[16px] px-[48px] flex flex-col gap-[16px] border-t-[1px]">
              <p>About</p>
              <p>Work</p>
              <p>Testimonials</p>
              <p>Contact</p>
            </div>
            <div className="px-[48px] py-[16px] flex flex-col gap-[16px] border-t-[1px]">
              <div className="flex justify-between items-center">
                <span>Switch Theme</span>
                <div onClick={toggleTheme}>
                  {theme == "dark" ? <DarkModeToggler /> : <Toggle />}
                </div>
              </div>
              <div>
                <button className="bg-black text-white px-[16px] py-[6px] rounded-xl dark:bg-white dark:text-black w-full">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
