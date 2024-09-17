// export const Chip = (props) => {
//   //   const object = { name: "Christina", age: 80 };
//   //   const { name } = object;
//   //   console.log(name);

//   const { description, title, color } = props;

//   return (
//     <div>
//       <button>{title}</button>
//       <p>{description}</p>
//     </div>
//   );
// };
import Image from "next/image";
import cab from "../../public/ubcab.png";
export const zurag = () => {
  return <Image src={cab} />;
};
export const Ubcab = (props) => {
  const { title, desc, tech } = props;

  return (
    <div className="box-border w-[1152px]">
      <div className="w-[576px]">{/* <Image src={cab} /> */}</div>
      <div className="w-[576px]">
        <h1 className="font-semibold text-[20px]">{title}</h1>
        <p>{desc}</p>
        <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px] text-[14px]">
          {tech}
        </span>
      </div>
    </div>
  );
};
