// function definition

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    
}

//sayMyName()

// function addTwoNumbers(number1, number2){ // number1,number2 = parameteres
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4) // 3 and 4 are arguments

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    console.log("Priya") // yaha priya print hoga
    return result // iske niche console.log karege to nhi hoga
}

const result = addTwoNumbers(5, 4)
//console.log("Result:", result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
     return '$(username) just logged in'
}

//console.log(loginUserMessage("Priya"));
console.log(loginUserMessage()) // kuch value nhi di to undefined o/p aata hai
