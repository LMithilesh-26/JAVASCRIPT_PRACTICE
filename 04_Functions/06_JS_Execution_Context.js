/*
    1: Global Execution Phase -> this

    2: Memory Allocation Phase
        val1 -> undefined
        val2 -> undefined
        addition -> defination
        result1 -> undefined
        result2 -> undefined

    3: Execution 
        val1 -> 10
        val2 -> 20
        addition -> New Execution context is created for addition().
            1: Memory Allocation Phase
                num1 -> undefined
                num2 -> undefined
                total -> undefined

            2: Execution
                num1 -> 10
                num2 -> 20
                total -> 30

        result1 -> 30
        Again GEC will be created for addition().
        result2 -> 11 
*/
let val1 = 10
let val2 = 20

function addition(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addition(val1, val2)
let result2 = addition(5, 6)