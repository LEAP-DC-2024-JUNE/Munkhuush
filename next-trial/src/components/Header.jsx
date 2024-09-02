const { default: Link } = require("next/link");
import Logo from "@/icons/icon";
import Toggle from "@/icons/toggler";

function Bar() {
  return (
    <div className="flex justify-between mx-[112px] my-[16px] items-center">
      <Logo />

      <div className="flex gap-12 list-none items-center">
        <div className="flex gap-6">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </div>
        <div className="flex gap-4">
          <Toggle />
          <button className="bg-black text-white px-[16px] py-[6px] rounded-xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
export default Bar;
