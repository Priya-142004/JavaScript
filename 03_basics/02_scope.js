 let a = 10; 
// const b = 20;
// var c = 30;
var c = 300;

//{} --> Scope
if(true){
    let a = 100
    const b = 20
    console.log("INNER:", a); // gives 100
    var c = 30 // is is so alag yaha ki value yaha console krne pr hi milni chahiye pr ye bahar out of scope bhi value return krta hai
}

 console.log(a); // gives 10
// console.log(b);
//console.log(c);


// Anadar ka function bahar ke variable ko access kr pata hai but vice vers is not true

// function one(){
//     const username = "Priya"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     //console.log(website); 

//     //two() -- agar ye call nhi kiya to priya print nhi hoga
// }
// one()

if (true) {
    const username = "Priya"
    if(username === "Priya"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website) // out of scope
}
//console.log(username); // out of scope

// +++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++
//(addone(5))// we can write here or

  console.log(addone(5))

function addone(num){
    return num + 1
}
// addone(5) // we can write here also in this type of decalration

// addtwo(5) // is type ke decalration me yaha (declaration ke pehle) nhi use kr sakte
const addTwo = function(num){
    return num + 2
}
addTwo(5)