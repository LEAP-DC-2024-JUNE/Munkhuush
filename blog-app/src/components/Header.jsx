import Logo from "@/icons/logo";
import SearchIcon from "@/icons/search";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = ({ setInputValue }) => {
  const router = useRouter();
  return (
    <div className="py-8 px-40">
      <div className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center w-[854px] gap-[21px]">
          <div className="w-[667px] flex gap-[40px] justify-center font-normal">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contactUs">Contact</Link>
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
