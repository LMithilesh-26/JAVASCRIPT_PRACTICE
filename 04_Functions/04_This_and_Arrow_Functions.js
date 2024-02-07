// this -> used to access current context
const user = {
    username: "Mike",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welome to website.`);
    }

}
user.welcomeMessage()

console.log(this); // {}

function func1 (){
    let username = "Sam"
    // console.log(this);// not {}
    console.log(this.username); // undefined 
    // works for objects only
}
func1()

// Arrow Function

const func2 = () => {
    let username = "Sam"
    console.log(this.username); // undefined
    console.log(this); // {}
}
func2()

const addition = (num1, num2) => {
    return num1 + num2
}
// implicit return 
const multiply = (num1, num2) => num1 * num2

console.log(addition(10, 20))
console.log(multiply(5, 4));

const returnObject = () => ({username: "Ro"})

console.log(returnObject());