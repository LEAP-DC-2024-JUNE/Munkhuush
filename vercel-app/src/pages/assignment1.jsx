import { useState } from "react";

export default function Assignment1() {
  const [num, setNum] = useState(0);
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenNumberArray = array.filter((number) => {
    return number % 2 == num;
  });
  const Click = () => {
    setNum(0);
  };
  const clickClick = () => {
    setNum(1);
  };
  return (
    <div>
      <h1>Assignment 1</h1>
      <div className="flex gap-10">
        <button className="border-4 bg-green-300" onClick={Click}>
          Even Numbers
        </button>
        <button className="border-4 bg-red-400" onClick={clickClick}>
          Odd Numbers
        </button>
      </div>
      <div>
        {evenNumberArray.map((number, index) => {
          return (
            <div key={index}>
              <p>{number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
