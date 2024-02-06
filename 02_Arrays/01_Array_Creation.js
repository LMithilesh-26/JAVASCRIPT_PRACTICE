const myarr = [0, 1, 2, 3, 4, true, "hello"] // contains mix of datatypes

console.log(myarr[1]);
console.log(myarr[5]);

// In JS array compy operations create shallow copies(Share same reference point).

const myarr2 = new Array(1, 2, 3, 4, 5)

myarr2.push(6)
console.log(myarr2);

myarr2.pop() // remove last element

myarr2.unshift(0) // insert element at start of the array
myarr2.shift() // remove first element
console.log(myarr2);

myarr2.includes(9) // false
myarr2.indexOf(9) // -1

const newArr = myarr2.join()
console.log((newArr));
console.log(typeof newArr); // string 

console.log("Original Array: ", myarr); // 

const myn1 = myarr.slice(1, 3)
console.log("Slice Array: ", myn1); //

console.log("Original Array After Slice: ", myarr);

const myn2 = myarr.splice(1, 3)
console.log("Splice Array: ", myn2);
console.log("Original Array after Splice: ", myarr);

// In slice, the original array doesnt get change.
// In the range (A, B) -> It prints A to B-1 index.

// In case of splice the original array index gets deleted.