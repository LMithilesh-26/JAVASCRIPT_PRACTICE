"use strict" // treat all JS code as newer version
/*
    JavaScript is a dynamically typed language. 
    Because data type will automatically assigned at the time of compilation or code execution.
    
    Types of Datatypes:
    1: Primitive: String, Number, Boolean, NULL, undefined, symbol, BigInt
    2: Non-Primitive: Arrays, objects, Functions
*/

console.log(typeof 10)
console.log(typeof "Hello World")
console.log(typeof true)
console.log(typeof null) // object
console.log(typeof undefined) // undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId) // false

const heros = ["Spiderman", "Batman", "Ironman"]

let myObj = {
    name: "Mithilesh",
    age: 18,
    city: "Delhi",
}

const myFunction = function(){
    console.log("Hello World")
}