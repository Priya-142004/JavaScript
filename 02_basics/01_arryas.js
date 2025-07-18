// Array

// dedclaration
const myArr = [0, 1, 2, 3, 4, 5, "priya"] // dissimilar dataypes are allowed
const myArr2 = new Array(1, 2, 3, 4)
const myHeros = ["shaktiman" , "naagraj"]

console.log(myArr[4]);

// Array methods

// myArr.push(14)
// myArr.pop()

// myArr.unshift(3)
// myArr.shift();

// console.log(myArr);


// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // array elements ko string me convert krta hai

console.log(myArr);
console.log(newArr); 
console.log(typeof newArr);

// slice, splice methods

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);