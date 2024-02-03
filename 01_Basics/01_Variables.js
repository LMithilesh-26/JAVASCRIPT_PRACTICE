console.log("Mithilesh")

const accountId = 1 // not allowed to change
let accountEmail = "mithilesh@gmail.com" 
var accountPassword = "12345678"
accountCity = "Delhi"

// Prefer not to use var because of issue in block scope and functional scope.

let temp;
console.log(temp) // undefined

console.table([accountId, accountEmail, accountPassword, accountCity])