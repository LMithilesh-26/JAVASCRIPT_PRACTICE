// for of

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const i of arr) {
    console.log(i);
}

// Maps

const map = new Map()
map.set('IN', 1)
map.set('USA', 2)
map.set('FR', 3)

console.log(map);
for (const [key, values] of map) {
    console.log(values);
}

// for in 

const myObj = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (const key in myObj) {
    console.log(key);
    console.log(myObj[key]);
}

for (const key in arr) {
    console.log(key); // print keys 
    console.log(arr[key]); // prints arr values using keys
}

for (const key in map) {
    console.log(key);
}

// for each

arr.forEach(function (item){
    console.log(item);
})
arr.forEach(element => {
    console.log(element);
});

arr.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: ".js"
    },
    {
        languageName: "Java",
        languageFileName: ".java"
    },
    {
        languageName: "Python",
        languageFileName: ".py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
})