var c = 300
let d = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    let d = 50
    console.log(d); // 50
}
// console.log(a); // gives error as a scope is over
// console.log(b); // gives error as b is out of scope
console.log(c); // 30
console.log(d); // 100