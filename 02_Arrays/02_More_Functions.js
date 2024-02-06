const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

// marvel.push(dc)
console.log(marvel); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

const allHeroes = marvel.concat(dc)
console.log(allHeroes);

const newHeroes = [...marvel, ...dc]
console.log(newHeroes);

const newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const newArray2 = newArray.flat(Infinity)
console.log(newArray2);

console.log(Array.isArray("Ronaldo")); // Checks if it is array
console.log(Array.from("Ronaldo")); // converts into array