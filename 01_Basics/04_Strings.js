const name = "Mithilesh"
const repoCount = 10

console.log(`Hello My name is ${name} and my Repo count is ${repoCount}`);

const str = new String("Rohit Sharma")

console.log(str[0]); // R
console.log(str.length); // 12
console.log(str.toUpperCase()); // "ROHIT SHARMA"
console.log(str.charAt(5)); // " " Space
console.log(str.indexOf('m')); // 10

const newStr = str.substring(0, 4)
console.log(newStr); // Rohi