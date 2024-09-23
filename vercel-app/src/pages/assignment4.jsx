// Assignment 4: Filter Products by Availability

import { useState } from "react";

// Task: Write a function filterAvailableProducts that takes an array of products, where each product is an object with name, price, and available properties. It should return a new array containing only the products that are available (available: true).

// function filterAvailableProducts(products) {
//   // Use filter to return only available products
// }

// // Example
// const products = [
//   { name: "Laptop", price: 1200, available: true },
//   { name: "Phone", price: 800, available: false },
//   { name: "Tablet", price: 400, available: true },
// ];

// console.log(filterAvailableProducts(products));
// // [{ name: "Laptop", price: 1200, available: true }, { name: "Tablet", price: 400, available: true }]

export default function Assignment4() {
  const [baraa, setBaraa] = useState(true);
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];
  const filterAvailableProducts = products.filter((product) => {
    return product.available == baraa;
  });
  // const Dardaa = () => {
  //   setBaraa(true);
  // };
  // const Dariich = () => {
  //   setBaraa(false);
  // };

  const Dardag = (param1) => {
    setBaraa(param1);
  };
  return (
    <div>
      <h1>Assignment 4</h1>
      <div className="flex gap-11">
        <button className="border-4 bg-green-300" onClick={() => Dardag(true)}>
          Available
        </button>
        <button className="border-4 bg-red-300" onClick={() => Dardag(false)}>
          Not available
        </button>
      </div>
      <div>
        {filterAvailableProducts.map((product, index) => {
          return (
            <div key={index}>
              <p>
                {product.name}
                {product.price}
                {product.available}
              </p>
              {/* <p>{product.price}</p>
              <p>{product.available}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
