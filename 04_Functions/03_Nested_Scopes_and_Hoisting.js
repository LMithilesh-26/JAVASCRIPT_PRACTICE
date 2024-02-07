function one(){
    const username = "Sam"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    two()

    console.log(website);

    // two()
}
// one()  // Error

console.log(func(10)); // 11
function func(num){
    return num + 1
}
console.log(func(5)); // 6


// console.log(temp(20)); Error
const temp = function(num){
    return num + 2
}
console.log(temp(5)); // 7