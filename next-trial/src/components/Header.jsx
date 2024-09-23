// const { default: Link } = require("next/link");

import Logo from "@/icons/icon";
import Toggle from "@/icons/toggler";
import { useTheme } from "next-themes";
import Menu from "@/icons/menucon";
import { BurgerMenu } from "./BurgerMenu";
import { useState, useEffect } from "react";
import Close from "@/icons/closeBtn";
import DarkModeLogo from "@/icons/logoDarkMode";
import DarkModeToggler from "@/icons/togglerDarkMode";
import DarkModeMenu from "@/icons/menuDarkMode";

function Bar() {
  const { setTheme, theme } = useTheme();
  const [isOpen, setisOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  console.log(theme);
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const Hamburger = () => {
    console.log(isOpen);
    setisOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex justify-between min-[431px]:mx-[112px] min-[431px]:my-[16px] items-center max-[431px]:py-[16px] max-[431px]:px-[48px]">
      {theme == "dark" ? <DarkModeLogo /> : <Logo />}
      <div className="min-[431px]:hidden">
        {!isOpen && (
          <div onClick={Hamburger}>
            {theme == "dark" ? <DarkModeMenu /> : <Menu />}
          </div>
        )}
        {/* {!isOpen && (
          <div onClick={Hamburger}>
            <Close />
          </div>
        )} */}
        {isOpen && <BurgerMenu isOpen={isOpen} closeMenu={Hamburger} />}
      </div>
      {/* {!isOpen && <BurgerMenu />} */}

      <div className="flex gap-12 list-none items-center max-[431px]:hidden">
        <div className="flex gap-6">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </div>
        <div className="flex gap-4">
          <div onClick={toggleTheme}>
            {theme && theme == "dark" ? <DarkModeToggler /> : <Toggle />}
          </div>
          <button className="bg-black text-white px-[16px] py-[6px] rounded-xl dark:bg-white dark:text-black">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
export default Bar;
