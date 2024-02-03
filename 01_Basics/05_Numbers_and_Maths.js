const num = 100
console.log(num); // 100

const temp = new Number(200) 
console.log(temp); // [Number: 200]

console.log(num.toString().length); // 3
console.log(num.toFixed(2)); // 100.00

let floatNum = 23.56778
console.log(floatNum.toPrecision(3)); // 23.6
floatNum = 123.56778
console.log(floatNum.toPrecision(3)); // 124 

console.log(Math.abs(-4)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.max(3, 4, 1, 9)); // 9

console.log(Math.random()); // Value always between 0 to 1 
console.log(Math.random() * 10 + 1); // To get value >= 1

// To get value in between 10 and 20
let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);