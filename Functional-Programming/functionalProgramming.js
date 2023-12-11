// First Class Citizens
function addNumbers() {
  console.log(2 + 2);
}

let fn = addNumbers();
// console.log(fn);

// Higher-order functions

// Map function

let numbers = [1, 2, 3];
// numbers.map((number) => {
//     console.log(number*2)
// })

// setTimeout function
// setTimeout(addNumbers, 1000)

// Compose and Pipe

let input = "JavaScript";

// version 1 => without using functions
let output = "<div>" + input.trim() + "<div>";
console.log(output);

// using functions
const toTrim = (str) => str.trim();
const WrapToDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str) => str.toLowerCase();

console.log(WrapToDiv(toLowerCase(toTrim(input))));

// version 2 => using compose
