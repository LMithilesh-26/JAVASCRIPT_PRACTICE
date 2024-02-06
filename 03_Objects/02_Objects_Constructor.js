const user = new Object() // Singleton Object because declared as a Constructor.

user.id = "1"
user.name = "Adam"
user.country = "US"

// console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

const regularUser = {
    email: "adam@gmail.com",
    fullName: {
        firstName: "Adam",
        lastname: "Smith"
    }
}
// console.log(regularUser.fullName.firstName);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

// const obj3 = {obj1, obj2}
// console.log(obj3); obj3 will contain 2 objects (obj1 and obj2)

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);
// {} act as target and all other objects will act as source
// all source objects values will copied in {} (target).

// Another method to combine objects: Spread operator

const obj4 = {...obj2, ...obj1}
console.log(obj4);


const users = [
    {
        id: 1,
        name: "Rohit"
    },
    {
        id: 2,
        name: "Shubhman"
    },
    {
        id: 3,
        name: "Virat"
    }
]
console.log(users[1].name);