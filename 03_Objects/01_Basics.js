// Objects can be declared as literal and constructor.
// Objects Literals:

const mySym = Symbol("Key1")

const user = {
    name: "Mithilesh",
    "full Name": "Cristiano Ronaldo", // cannot be access using (.)
    age: 18,
    location: "Delhi",
    email: "mithilesh@google.com",
    lastLoginDays: ["Monday", "Sunday"],
    // mySym: "Hello" // act as string not as symbol
    [mySym]: "Hello"
}

console.log(user.name);
// console.log(user[email]); // error
console.log(user["email"]);

// console.log(typeof user.mySym);

console.log(user[mySym]);

// Changing values in objects

user.email = "mithilesh@gmail.com"

// Object.freeze(user) // Objects values cannot be changes after freeze.

console.log(user);

user.greeting = function(){
    console.log("Hello JS User");
}
user.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(user.greeting); // undefined
console.log(user.greeting()); 

console.log(user.greeting2());