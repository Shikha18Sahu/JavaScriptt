"use strict";  // treat all JS code as newer version
// Strict mode enables a stricter set of rules for JavaScript, which can help catch common coding mistakes and improve the overall quality of your code.
alert("Hello, World!"); // This will work in non-strict mode, but in strict mode, it will throw a ReferenceError because 'alert' is not defined as a global variable.
// Bcs We are using nodejs, not browser

console.log(3+3) 
console.log("Shikha");

//ECMA and MDN to explore javascript standards

let name= "Shikha"
let age= 18
let isLoggedIn = false
let state; // undefined
let state= null; // 0 

//PRimitive Datatypes

// number => range: 2 to pwer 53
// bigint
// string => ""
// boolean => true/ false
// null => standalone value
// undefined => abhi value assigned nai hui hai
// symbol => unique

// Non Primitive(reference) Datatypes
// object // array // function

console.log(typeof null);  //Object  // a historical bug in JavaScript.
console.log(typeof arr);  //Object  
console.log(typeof function);  //Object  

console.log(typeof undefined);  //undefined
