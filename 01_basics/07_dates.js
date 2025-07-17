// Dates

let myDate = new Date()
// console.log(myDate); // 2025-07-17T09:03:17.946Z
// console.log(myDate.toString()); // Thu Jul 17 2025 09:04:26 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
//console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 24)
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); value in milisecond
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000)); // in seconds, floor- to remove decimal

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

