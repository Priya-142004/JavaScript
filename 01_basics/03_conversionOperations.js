//let score = "44"
// let score = null // 0


// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score); // Number is a datatype
// console.log(typeof valueInNumber);

// let id = "4abc"

// console.log(typeof id);
// let valueOfIdInNumber = Number(id);

// console.log(typeof valueOfIdInNumber);
// console.log(valueOfIdInNumber); //Nan--> Not a number

// "33" -> 33
// "3abc" -> NaN
// true -> 1; false -> 0

//let isLoggedIn = 1
// 0 -> false; 
// " " -> false; 
// "priya" -> true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber = 43

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************************ Operations ***************************

let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3); // 2 to the power 3
// console.log(2%3);


let str1 = "hello"
let str2 = " John"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);         // 12
// console.log(1 + "2");         // 12
// console.log("1" + 2 + 2);     // 122 string first hai to sbhi ko string consider kiya
// console.log(1 + 2 + "2");     // 32 yaha string first nhi hai

// console.log((3 + 4) * 5 % 3); // so use parenthesis to overcome above issue

console.log(+true); // 1
//console.log(true+); // gives error
console.log(+""); // 0

let gameCounter = 100
gameCounter++;
console.log(gameCounter);