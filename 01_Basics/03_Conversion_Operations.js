/*
let score = 30
let str = "20abc"

console.log(typeof(score)) // number
console.log(typeof(str)) // string

let number = Number(str)
let str1 = String(score)

console.log(typeof(number)) // number
console.log(number) // NaN
console.log(typeof(str1)) // string

    /*
        To Number Conversion
        "33" --> 33
        "33abc" --> NaN
        true --> 1
        false --> 0

        To Boolean Conversion
        "" --> false
        "hello" --> true

let value = 3
let negValue = -value
console.log(negValue) // -3

console.log(3 + 2) // 5
console.log(3 - 2) // 1
console.log(3 * 2) // 6
console.log(3 ** 2) // 9 Power

let str2 = "Hello"
let str3 = " World"
let str4 = str2 + str3
console.log(str4) // Hello World

*/
console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32

console.log("2" > 1) // true Internal conversion from string to int

console.log(null > 0) // false
console.log(null >= 0) // true
