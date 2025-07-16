// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.4
const isLogged = true;
const outsideTemp = null;
let userEamil;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 467987620876543282544n


// Reference (Non Primitive)

// Array, Objects. Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Priya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);