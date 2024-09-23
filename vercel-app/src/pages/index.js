import Image from "next/image";
import localFont from "next/font/local";
import { Products } from "@/components/Products";
import { Task1 } from "@/components/LoginStatus";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export default function Home() {
//   //   // let loading = true;
//   //   // let age = 27;
//   //   // if (10 > 20 || 5 < 10) {
//   //   //   console.log("ajillaa");
//   //   // } else {
//   //   //   console.log("ajillasangue");
//   //   // }
//   let obj = { name: "munkuush", lastName: "pinecone" };
//   return (
//     <div>
//       {obj.name == "munkhuush" && obj.lastName == "pinecone" && (
//         <div>
//           <p>Welcome</p>
//         </div>
//       )}
//       {(obj.name !== "munkhuush" || obj.lastName !== "pinecone") && (
//         <div>
//           <p>Can't access</p>
//         </div>
//       )}
//     </div>
//   );
// }

//       {/* {!obj.name && (
//         <div>
//           <p>Nevtersengue</p>
//         </div>
//       )} */}
//       {/* {loading && <div>Yes</div>} */}
//       {/* <p>hi</p> */}
//       {/* {age > 18 ? <div>you good</div> : <div>go to bed!</div>} */}
//       {/* <Products /> */}
//     </div>
//   );
// }

// Exercise 1: Basic Prop-Based Conditional Rendering

// Task: Create a component that receives a prop isLoggedIn and displays “Logged In” if true, or “Please Log In” if false.

//   •  Instructions:
//   •  Create a LoginStatus component that accepts a prop isLoggedIn.
//   •  Use conditional rendering based on the isLoggedIn prop to display the appropriate message.

// export default function Home() {
//   return (
//     <div>
//       <Task1 isLoggedIn={true} />
//     </div>
//   );
// }

// import { useState } from "react";

// const Home = () => {
//   const [name, setName] = useState("Billy");

//   const handleClick = () => {
//     setName("Duluu");
//   };

//   return (
//     <div>
//       <p>{name}</p>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// };

// export default Home;

// const Home = () => {
//   const [number, setNumber] = useState(0);
//   const handleClick = () => {
//     setNumber(number + 1);
//   };
//   return (
//     <div>
//       <p>{number}</p>
//       <button onClick={handleClick}>times clicked</button>
//     </div>
//   );
// };

// const Home = () => {
//   const [number, setNumber] = useState(0);

//   const handleClick = () => {
//     setNumber(number + 1);
//   };
//   const handleMinus = () => {
//     setNumber(number - 1);
//   };

//   return (
//     <div>
//       <p>{number}</p>
//       <button onClick={handleClick}>+</button>
//       <button onClick={handleMinus}>-</button>
//     </div>
//   );
// };

// const Home = () => {
//   const [color, setColor] = useState("Off");

//   const Toggle = () => {
//     if (color == "Off") {
//       return setColor("On");
//     } else {
//       return setColor("Off");
//     }
//   };
//   if (color == "Off") {
//     return (
//       <div className="flex justify-center items-center py-11">
//         <button className="border-2 bg-red-400 w-[100px]" onClick={Toggle}>
//           {color}
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="flex justify-center items-center py-11">
//         <button className="border-2 bg-green-400 w-[100px]" onClick={Toggle}>
//           {color}
//         </button>
//       </div>
//     );
//   }
// };
// export default Home;

// import { useState } from "react";

// const Home = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <button
//         onClick={handleClick}
//         style={{
//           border: "1px solid red",
//           padding: "10px",
//         }}
//         className={`${click ? "bg-green-600" : "bg-red-600"}`}
//       >
//         {click ? "On" : "Off"}
//       </button>
//     </div>
//   );
// };

// export default Home;
import { useState } from "react";
export default function Home() {
  const [age, setAge] = useState(18);
  const array = [
    { name: "Duluu", age: 18 },
    { name: "Alungoo", age: 17 },
    { name: "Sumya", age: 19 },
  ];

  const filteredArray = array.filter((element) => {
    return element.age >= age;
  });
  const handleClick = () => {
    setAge(0);
  };
  const handleClickAdult = () => {
    setAge(18);
  };
  return (
    <div>
      <h1>Nasand hursen</h1>
      <button className="bg-slate-400" onClick={handleClickAdult}>
        18 s deesh nasniih
      </button>
      <button className="bg-red-300 " onClick={handleClick}>
        buh nasniihan
      </button>
      <div>
        {filteredArray.map((person, index) => {
          return (
            <div key={index}>
              <p>{person.name}</p>
              <span>{person.age}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
