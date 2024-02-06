let myDate = new Date()

console.log((myDate.toString()));
console.log(myDate.toDateString());
console.log((myDate.toLocaleString()));

console.log(typeof myDate); // Object

let tempDate = new Date(2023, 12, 23)
console.log(tempDate.toDateString());
// Months start from 0 in JS

let createDate = new Date("2023-01-26")
console.log(createDate.toLocaleString());

let mytimeStamp = Date.now()
console.log((mytimeStamp));