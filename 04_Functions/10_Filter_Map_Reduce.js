const coding = ["C++", "JS", "JAVA", "Python", "Ruby"]

coding.forEach((item) => {
    console.log(item);
})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNums.filter((item) => item > 5)
console.log(newNums);

newNums = myNums.filter((item) => {
    if(item % 2 == 0) return item 
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === "History")
console.log(userBooks);

// map

newNums = myNums.map((item) => item + 10)
console.log(newNums);

newNums = myNums.map((item) => item * 10).map((item) => item + 10)
console.log(newNums);

newNums = myNums
                .map((item) => item * 10)
                .map((item) => item + 10)
                .filter((item) => item >= 50)
console.log(newNums);

const arr = [1, 2, 3]

const initialValue = arr.reduce(function(acc, currVal) {
    console.log(`Acc: ${acc}, CurrVal: ${currVal}`);
    return acc + currVal
}, 0)

console.log(initialValue);