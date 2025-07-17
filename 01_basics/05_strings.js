const name = "Priya"
const repoCount = 50

//console.log(name + repoCount + "Value"); //old way o/p: Priya50value

// modern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('priyahhc')

console.log(gameName[0]);
console.log(gameName.__proto__); 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    priya    "
console.log(newStringOne);
console.log(newStringOne.trim()); // space gayab houn jate

const url = "https://priya.com/priya%20nivalkar"

console.log(url.replace('%20', '-'))
console.log(url.includes('riya'))
console.log(url.includes('viva'))

const myName = new String('priya-sudhakar-nivalkar')

console.log(myName.split('-'))



