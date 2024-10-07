import Image from "next/image";
import Pic from "../../public/Pic1.png";
function Intropic() {
  // return <img className="w-[320px] m-0" src="/Pic1.png" alt="" />;
  return <Image src={Pic} />;
}

export default Intropic;
