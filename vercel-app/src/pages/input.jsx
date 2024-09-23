const Input = () => {
  return (
    <div className="flex flex-col gap-[48px]">
      <input
        className="border-2  bg-red-300 w-[100px]"
        type="text"
        placeholder="abcd"
      />
      <input
        className="border-2  bg-red-300 w-[100px]"
        type="password"
        placeholder="****"
      />
      <input className="border-2  bg-red-300 w-[100px]" type="email" />
      <input className="border-2  bg-red-300 w-[100px]" type="number" />
      <input className="border-2  bg-red-300 w-[200px]" type="checkbox" />
      <input className="border-2  bg-red-300 w-[200px]" type="radio" />
      <input className="border-2 w-[100px]" type="hidden" />
      <input className="border-2 w-[100px]" type="button" />
      <input className="border-2 w-[100px]" type="color" />
      <input type="file" />
      <input type="image" />
    </div>
  );
};
export default Input;
