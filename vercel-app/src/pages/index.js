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

export default function Home() {
  //   // let loading = true;
  //   // let age = 27;
  //   // if (10 > 20 || 5 < 10) {
  //   //   console.log("ajillaa");
  //   // } else {
  //   //   console.log("ajillasangue");
  //   // }
  let obj = { name: "munkuush", lastName: "pinecone" };
  return (
    <div>
      {obj.name == "munkhuush" && obj.lastName == "pinecone" && (
        <div>
          <p>Welcome</p>
        </div>
      )}
      {(obj.name !== "munkhuush" || obj.lastName !== "pinecone") && (
        <div>
          <p>Can't access</p>
        </div>
      )}
    </div>
  );
}

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
