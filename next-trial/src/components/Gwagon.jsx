import Image from "next/image";
import car from "../../public/gclass.png";
function Gwagon() {
  return (
    <div className="bg-slate-200 w-[400px] h-[400px] rounded-[50px] flex justify-center items-center">
      <Image className="w-[300px] h-[300px] rounded-full" src={car} />
    </div>
  );
}

export default Gwagon;
