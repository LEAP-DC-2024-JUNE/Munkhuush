import Logo from "@/icons/logo";
import SearchIcon from "@/icons/search";
import { MyContext } from "@/utils/context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

export const Header = () => {
  const router = useRouter();
  // const [line, setLine] = useState("");
  const { setInputValue } = useContext(MyContext);
  // const addLine = (param1) => {
  //   setLine(param1);
  // };
  console.log(router.pathname);

  return (
    <div className="py-8 px-40">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center w-[854px] gap-[21px]">
          <div className="w-[667px] flex gap-[40px] justify-center font-normal">
            <Link
              // onClick={() => setLine("home")}
              href="/"
              className={`px-2 hover:text-white hover:bg-black hover:rounded-xl ${
                router.pathname == "/"
                  ? `text-white bg-black rounded-xl`
                  : `text-black `
              }`}
            >
              Home
            </Link>
            <Link
              // onClick={() => setLine("blog")}
              className={`px-2 hover:text-white hover:bg-black hover:rounded-xl ${
                router.pathname == "/blog"
                  ? `text-white bg-black rounded-xl`
                  : `text-black `
              }`}
              href="/blog"
            >
              Blog
            </Link>
            <Link
              // onClick={() => setLine("contactus")}
              className={`px-2 hover:text-white hover:bg-black hover:rounded-xl ${
                router.pathname == "/contactUs"
                  ? `text-white bg-black rounded-xl`
                  : `text-black `
              }`}
              href="/contactUs"
            >
              Contact
            </Link>
          </div>
          {router.pathname == "/blog" ? (
            <div className=" w-[166px] h-[36px] py-[8px] pl-[16px] pr-[8px] rounded-[5px] bg-gray-100 flex  items-center">
              <input
                className=" w-[114px] h-[20px] bg-gray-100 outline-none"
                placeholder="Search"
                onChange={(event) => setInputValue(event.target.value)}
              />
              <SearchIcon />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
