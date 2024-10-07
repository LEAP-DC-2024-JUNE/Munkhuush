export const TrendingCard = ({ pic, chips, title }) => {
  return (
    <div className="w-[289px] h-[320px] rounded-xl bg-blue-200 box-border flex justify-center items-end ">
      <img className="relative w-[289px] h-[320px] rounded-xl " src={pic} />
      <div className=" w-[230px] h-[120px] absolute mb-[28px] flex flex-col gap-[16px] box-border">
        <span className="flex items-center px-[10px] py-[4px] text-blue-400 font-medium bg-gray-100 rounded-[6px] w-fit h-[28px] ">
          {chips}
        </span>
        <p className="text-white text-[18px] font-semibold">{title}</p>
      </div>
    </div>
  );
};
