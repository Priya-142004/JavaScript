// sigleton

// onjects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Priya",
    age: 20,
    "full name": "Priya Nivalkar",
    mySym: "mykey1",
    location: "Pune",
    email: "priyanivalkar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // it is in [] coz it is written in String type
// console.log(JsUser.mySym)
// console.log(typeof mySym)

JsUser.email = "priya@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "Priya@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}
// console.log(JsUser.greeting()); ==> confusion
// console.log(JsUser.greetingTwo()); 