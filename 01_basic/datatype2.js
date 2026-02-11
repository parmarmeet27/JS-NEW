//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 10;
const scoreValue =10.3;

const IslogedIn = false;
const outsideTemp = null;
let UserEmail;

const Id = Symbol("123");
const UserId = Symbol("123");

console.log( Id === UserId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const Name = ["meet","Dharmik","Parth"];

let obj = {
    name : "meet",
    id : "36"

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof UserId);

// stack and heap

let name ="meet";
let name1 = name;
name1 = "Parmar";
console.log(name1);
console.log(name);

let obj1= {
    Email: "meet@27",
    pass: "123"
}

let userData = obj1;
userData.Email = "meet@123";

console.log(obj1.Email);
console.log(userData.Email);