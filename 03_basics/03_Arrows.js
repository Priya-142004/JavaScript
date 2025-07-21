const user = {
    username: "priya",
    price: 999,

    welcomeMessage: function(){
    //    console.log(`${this.username}, welcome to website`);
    //     console.log(this);
    }

}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// function chai(){
//     let username = " hitesh"
//     //console.log(this.username); --> undefined, this function ke anadar use nhi kr sakte Objects ke andar hi use krna pdta
// }
// chai()

// const chai = () => { // arrow me this use kr sakte hai
//     let username = "priya"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2  // {} me wrap kiya to return keyword likhna padega
// }
// console.log(addTwo(4, 5));

// Implicit return
const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => ( num1+num2) // () me return likhne ki jarurat nhi

console.log(addTwo(4, 5))

