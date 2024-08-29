// const num = [1, 2, 3, 4, 5]
// let i = 0;
// let sum = 0;

// while(i<num.length){

//     sum = sum + num[i];

//     i++;

// }
// console.log(sum);



const array = [1, 2, 3, 4, 5]
let newArray = [];

for (let i = array.length - 1; i >= 0; i--){
    // console.log(array[i]);
    newArray.push(array[i]) 

}

console.log(newArray);