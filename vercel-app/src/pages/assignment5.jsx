// Assignment 5: Filter Students Who Passed

import { useState } from "react";

// Task: Write a function filterPassingStudents that takes an array of students, where each student is an object with name and grade properties. Return a new array containing only the students who scored 60 or more.

// function filterPassingStudents(students) {
//   // Use filter to return students with grade >= 60
// }

// // Example
// const students = [
//   { name: "Alice", grade: 58 },
//   { name: "Bob", grade: 72 },
//   { name: "Charlie", grade: 85 },
//   { name: "David", grade: 45 },
// ];

// console.log(filterPassingStudents(students));
// // [{ name: "Bob", grade: 72 }, { name: "Charlie", grade: 85 }]

export default function Home() {
  const [passingStudent, setpassingStudent] = useState(true);
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const filterPassingStudents = students.filter((student) => {
    return passingStudent ? student.grade >= 60 : student.grade <= 60;
  });
  const Dardag = (param1) => {
    setpassingStudent(param1);
  };
  console.log(filterPassingStudents);
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="flex gap-11">
        <button className="border-4 bg-green-300" onClick={() => Dardag(true)}>
          Passed
        </button>
        <button className="border-4 bg-red-300" onClick={() => Dardag(false)}>
          Not Passed
        </button>
      </div>
      {filterPassingStudents.map((oyutan, index) => {
        return (
          <div key={index}>
            <span>{oyutan.name}</span>
            <span>{oyutan.grade}</span>
          </div>
        );
      })}
    </div>
  );
}
