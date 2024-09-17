// import { Chip } from "@/components/Props";
import { Ubcab } from "@/components/Props";
import Image from "next/image";
import cab from "../../public/ubcab.png";

const Home = () => {
  return (
    <div className="flex">
      <div>
        <Image src={cab} />
      </div>
      <div className="">
        <Ubcab title="UbCab" />
        <Ubcab desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
        <Ubcab tech="React" />
      </div>
    </div>
  );
};

export default Home;
