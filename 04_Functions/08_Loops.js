for(let i=0; i<=10; i++) {
    console.log(i);
}

let i = 0
while(i < 10) {
    console.log(i);
    i++;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index] * 10);
}

for (let index = 0; index < arr.length; index++) {
    if(arr[index] % 2 == 0) {
        continue;
    }
    else {
        console.log(arr[index]);
    }
}

let score = 11
do {
    console.log(score),
    score++;
} while(score <= 10);