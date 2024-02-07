function func(){
    console.log("Hello World");
}

func()

function addition(num1, num2){
    // console.log(num1 + num2);
    return (num1 + num2)
}

addition(10, 20)
addition('a', 30) // will be treated as string -> a30

const result = addition(10, 20)

function loginUserMessage(username = "Mike"){
    return `${username} just logged in.`
}

console.log(loginUserMessage("Mithilesh"));
// console.log(loginUserMessage()); //undefined just logged in.


function calculateCartPrice(...num){
    return num // returns an array
}
calculateCartPrice(100, 200, 400, 500)