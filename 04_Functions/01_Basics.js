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

function loginUserMessage()