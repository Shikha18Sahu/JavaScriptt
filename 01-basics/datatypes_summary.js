// Datatype ko 2 types me categorized kiya gya hai: 
// 1. kis trh se data ko memory me store krna hai
// 2. kis trh se data ko access krna hai from memory.
//   // Primitive and Non Primitive


//  Primitive

// 7 types (call by value) : 
// String , 
// Number,
// Booolean, 
// null(empty) ,
// undefined (varibale declared but value not ),
// Symbol, 
// bigint

const name = "sHikha"
const score = 100
const scoreValue = 100.2

const isLoogedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log( id === anotherId);

const bigNumber = 23432453435322532n



// JavaScript dynamically typed language => means it don't have to declare data type of a variable explicity.
// statically typed languages (e.g., Java, C++),


// Reference (NOn Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
  name: "shikha",
  age: 24, 
}

const myFunction = function(){
    console.log("SHikha")
}

// console.log(typeof name);  //string
// console.log(typeof score);  //number
// console.log(typeof scoreValue);  //number
// console.log(typeof isLoogedIn);  //boolean
// console.log(typeof outsideTemp);  // object
// console.log(typeof userEmail);   //undefined
// console.log(typeof id);   //symbol
// console.log(typeof anotherId);  //symbol
// console.log(typeof bigNumber);  //bigint
// console.log(typeof heros);   //object
// console.log(typeof myObj);   //object
// console.log(typeof myFunction);  //function//object



//https://262.ecma-international.org/5.1/#sec-11.4.3






//++++++++++++++++++++++++++++++++++++++++++++++++

//MemorY: 
//in Stack( use in(Primitive)): copy milta hai ,(original value me changes nai hota hai)
//in Heap(Non Primitive): reference milta hai (jo changes hota hai original value me hota hai..)

let myYoutubename = "sikhasahu"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne 
 
userTwo.email = "shikha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

