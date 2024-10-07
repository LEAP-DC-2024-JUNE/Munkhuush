// Assignment 2: Filter Strings by Length

import { useState } from "react";

// Task: Write a function filterByLength that takes an array of strings and a number n. It should return a new array with only the strings that have more than n characters.

// function filterByLength(strings, n) {
//   // Use filter to return strings longer than n characters
// }

// // Example
// console.log(filterByLength(["apple", "banana", "kiwi", "pear"], 4)); // ["apple", "banana"]

export default function Assignment2() {
  const [number, setNumber] = useState(4);
  const array = ["apple", "banana", "kiwi", "pear"];
  const filterByLength = array.filter((element) => {
    return element.length > number;
  });
  const handleChangeValue = (param1) => {
    setNumber(param1);
  };

  //   const Click = () => {
  //     setNumber(4);
  //   };
  //   const clickClick = () => {
  //     setNumber(2);
  //   };
  return (
    <div>
      <h1>Assignment 2</h1>
      <div className="flex gap-10">
        <button
          className="border-4 bg-green-300"
          onClick={() => handleChangeValue(4)}
        >
          4s deesh
        </button>
        <button
          className="border-4 bg-red-400"
          onClick={() => handleChangeValue(2)}
        >
          2s deesh
        </button>
      </div>
      <div>
        {filterByLength.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
