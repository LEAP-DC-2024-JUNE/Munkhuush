import Intropic from "@/pics/intropic";
import Location from "@/icons/location";
import Greendot from "@/icons/greenDot";
import Socialmedia from "@/icons/socialMedia";
function Intro() {
  return (
    <div className="box-border py-[96px] px-[80px]">
      <div className="flex w-[1280px] px-[32px] gap-[48px]">
        <div className="w-[600px] flex flex-col gap-[48px]">
          <div>
            <h1 className="text-[60px] font-bold">Hi, I'm Tom 👋</h1>
            <p>
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[8px]">
              <Location />
              <p>Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex gap-[8px]">
              <Greendot />
              <p> Available for new projects</p>
            </div>
          </div>
          <Socialmedia />
        </div>
        <div className="w-[568px] flex">
          <div className="w-[248px]"></div>
          <Intropic />
        </div>
      </div>
    </div>
  );
}

export default Intro;
