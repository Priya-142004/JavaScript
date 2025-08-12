// let myName = "priya     "
// let mychannel = "Dil ki Bateein    "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.priya = function() {
    console.log(`priya is present in all objects`);
}

Array.prototype.heyPriya = function() {
    console.log(`Priya says hello!`);
}

// heroPower.priya()
// myHeros.priya()
// myHeros.heyPriya()
//heroPower.heyPriya() // not a function

// Inheritance

const User = {
    name: "Parth",
    email: "parth@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"priya".trueLength()
"iceTea".trueLength()