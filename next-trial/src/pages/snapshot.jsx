import Image from "next/image";
import Pic1 from "../../public/Page2.png";
import Pic2 from "../../public/Page3.png";
import Pic3 from "../../public/Page4.png";
import Pic4 from "../../public/Page5.png";
import { Logo, Input1, Navigbar, Header } from "./Snapshotcomp";

const Snap = () => {
  return (
    <div>
      <Logo></Logo>
      <Input1></Input1>
      <Navigbar></Navigbar>
      <Header></Header>
      <div className="flex">
        <Image className="w-[200px] h-[200px]" src={Pic1}></Image>
        <Image className="w-[200px] h-[200px]" src={Pic2}></Image>
        <Image className="w-[200px] h-[200px]" src={Pic3}></Image>
        <Image className="w-[200px] h-[200px]" src={Pic4}></Image>
      </div>
    </div>
  );
};

export default Snap;
