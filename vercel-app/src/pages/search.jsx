import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const people = [
    { name: "Bob", age: 40 },
    { name: "Alex", age: 30 },
    { name: "Sam", age: 25 },
  ];
  const filteredValue = people.filter((person) => {
    let inputValueLower = inputValue.toLowerCase();
    let personNameLower = person.name.toLocaleLowerCase();
    return personNameLower.includes(inputValueLower);
    // return person.name
    //   .toLocaleLowerCase()
    //   .includes(inputValue.toLocaleLowerCase());
  });
  return (
    <div>
      <input
        className="border-2"
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      {filteredValue.length == 0
        ? people.map((person) => {
            return (
              <div>
                <p>{person.name}</p>
                <p>{person.age}</p>
              </div>
            );
          })
        : filteredValue.map((person) => {
            return (
              <div>
                <p>{person.name}</p>
                <p>{person.age}</p>
              </div>
            );
          })}
    </div>
  );
};
export default Search;
