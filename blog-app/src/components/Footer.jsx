import LogoFooter from "@/icons/footerLogo";
import Logo from "@/icons/logo";
import SocialMediaIcons from "@/icons/socialMedia";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-[64px] flex flex-col items-center gap-6 bg-gray-50">
      <div className="w-[1215px] flex gap-[20px]">
        <div className="w-[289px] box-border flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <span className="text-[18px] font-semibold">About</span>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span>Email : info@jstemplate.net</span>
            <span>Phone : 880 123 456 789</span>
          </div>
        </div>
        <div className="w-[521px] flex justify-center">
          <div className=" flex flex-col gap-[8px]">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contactUs">Contact</Link>
          </div>
        </div>
        <div>
          <SocialMediaIcons />
        </div>
      </div>
      <div className="py-8 w-[1215px] flex justify-between items-center  border-t-[1px]">
        <div>
          <LogoFooter />
        </div>
        <div className="w-[921px] flex gap-4 justify-end ">
          <span>Term of Use</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};
