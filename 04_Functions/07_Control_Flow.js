if(2 == '2'){
    console.log("Executed");
}
else{
    console.log("Not Executed.");
}

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard) {
    console.log("Allow to Shop.");
}

const month = 6
switch(month) {
    case 1: console.log("January");
            break;
    case 2: console.log("February");
            break;
    case 3: console.log("March");
            break;
    case 4: console.log("April");
            break;
    case 5: console.log("May");
            break;
    default: console.log("Other Months."); 
            break;
}

// False Values: false, 0, -0, null, undefined, 0n, NaN, ""

// Nullish Coalescing Operator : ??

let val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = null ?? 30 ?? 40 // 30
console.log(val1);

// Ternary Operator
// condition ? true : false