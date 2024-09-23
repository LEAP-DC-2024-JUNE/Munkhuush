// const array = [
//     {
//         name: "Bill",
//         age: 10,
//         siblings: [
//             {
//                 name: "Bolor",
//                 age: 11,
//             },
//             {
//                 name: "Boldoo",
//                 age: 9,
//             }
//         ]
//     }
// ];
// console.log(array[0].siblings[1].name);

// const array1 = [
//     [
//         {
//             name: "Bill",
//         },
//         {
//             name: "Dul",
//         }
//     ],
//     [
//         {
//             name: "Alungoo",

//         },
//         {
//             name: "Munkhuush"
//         },

//     ]

// ];
// console.log(array[0] [1].name);
// console.log(array[1] [1].name);

// const array = [1, 2, 3, 4, 5];

// let newArray = [];

// for( let i = array.length - 1; i >= 0; i--){
//     newArray[newArray.length]= array[i];

// }

// console.log(newArray);

// const arr = [2, 5, 100];
// // let result = 0;

// const result = arr.map((element) => {
//   return element * 2;
// });

// console.log(result);

// function capitalizeNames(arr) {
//   const result = arr.map((element) => {
//     return element.toUpperCase();
//   });
//   return result;
// }
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// function stringItUp(arr) {
//   const string = arr.map((medkue) => {
//     return medkue.toString();
//   });
//   return string;
// }

// console.log(stringItUp([2, 5, 100]));

// function namesOnly(arr) {
//   const names = arr.map((yuchbolodbgan) => {
//     return yuchbolodbgan.name;
//   });
//   return names;
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// function makeStrings(arr) {
//   const matrix = arr.map((butkue) => {
//     if (butkue.age < 50) {
//       console.log(butkue.name + " is under age");
//     } else {
//       console.log(butkue.name + " can go to matrix");
//     }
//   });
//   return matrix;
// }

// console.log(
//   makeStrings([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// function readyToPutInTheDOM(arr) {
//   const put = arr.map((oshohgoyo) => {
//     if (oshohgoyo.name == oshohgoyo.name && oshohgoyo.age == oshohgoyo.age) {
//       return (
//         "<h1>" + oshohgoyo.name + "</h1>" + "<h2>" + oshohgoyo.age + "</h2>"
//       );
//     }
//   });
//   return put;
// }
// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

const array = [1, 2, 3, 4];

const filteredArray = array.filter((element) => {
  return element > 2;
});
console.log(filteredArray);
