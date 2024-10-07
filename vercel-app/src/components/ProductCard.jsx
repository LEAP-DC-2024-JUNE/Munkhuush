import Image from "next/image";

export const ProductCard = ({ title, desc, imgSrc }) => {
  return (
    <div className="flex flex-col box-border gap-[20px]">
      <div className="">
        <Image className="w-[400px] h-[300px]" src={imgSrc} />
      </div>
      <div>
        <h1 className="font-bold text-[30px]">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
