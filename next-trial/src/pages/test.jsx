import Header, { Headertitle, HeaderDescription } from "../components/Note";
import Gwagon from "@/components/Gwagon";
const Page = () => {
  return (
    <div>
      <div className="flex gap-[30px]">
        <Gwagon />
        <Gwagon />
        <Gwagon />
      </div>
      <div className="flex gap-[50px] ">
        <HeaderDescription />
        <HeaderDescription />
      </div>
    </div>
  );
};

export default Page;
