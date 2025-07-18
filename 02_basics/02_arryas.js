const marevl_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

 //marevl_heros.push(dc_heros)
// console.log(marevl_heros);

// const allHeros = marevl_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marevl_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) // instead infinity we can also give actual depth
// console.log(real_another_array);

console.log(Array.isArray("Priya"))
console.log(Array.from("Priya"))
console.log(Array.from({name: "priya"})) // gives empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));