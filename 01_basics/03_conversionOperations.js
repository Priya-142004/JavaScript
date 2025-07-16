let score = "44"
// let score = null // 0


console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // Number is a datatype
console.log(typeof valueInNumber);

let id = "4abc"

console.log(typeof id);
let valueOfIdInNumber = Number(id);

console.log(typeof valueOfIdInNumber);
console.log(valueOfIdInNumber); //Nan--> Not a number

// "33" -> 33
// "3abc" -> NaN
// true -> 1; false -> 0

let isLoggedIn = 1
// 0 -> false; 
// " " -> false; 
// "priya" -> true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 43

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



