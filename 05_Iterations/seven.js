const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums); // yaha scope nhi hai isliye values return hui hai

//const newNums = myNumbers.map( (num) => { return num + 10})
//console.log(newNums); // yaha {} - scope tha isliye return word use krna pada

// Chaining

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40)

console.log(newNums);                