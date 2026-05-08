const score =300
// console.log(score);

const balance = new Number(100)
// console.log(balance); //100
//  console.log(balance.toString());       //100
// console.log(balance.toString().length);    //3 
// console.log(balance.toFixed(2));       //100.00
// console.log(typeof balance);      //string

const otherNumber = 28.84432
// console.log(otherNumber.toPrecision(3))  //28.8
const otherNumbers = 1128.86432
// console.log(otherNumber.toPrecision(3))  //28.9
const otherNumber = 128.86432
// console.log(otherNumber.toPrecision(3))  //128
const otherNumber = 1128.85432
// console.log(otherNumbers.toPrecision(3))  //1.13e+3

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// +++++++++++++++++ Maths +++++++++++++++++++

console.log(Math);   //Object [Math]{}
console.log(Math.abs(-4));   //4
console.log(Math.round(2.5));   //3
console.log(Math.ceil(4.3));  //5 -> top(yani 4 se thoda bhi bda hai to 5 kr dunga)
console.log(Math.floor(4.9));   //4 -> below (yani 4.kuch bhi ho mai 4 hi print krunga)  
console.log(Math.min(5,9));  //5
console.log(Math.random());  //between 0 and 1 anything
console.log(Math.random()*10 + 1);  // 1 to 10
console.log(Math.floor(Math.random()*10) +1);   //only one digit form 1 to 10 lowest(Floor)

//+++++++++++++++++++++++++++++++++++ important  +++++++++++++++++++++++++++++++++++++++
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula
// max-min=range
// +1=> avoid 0
// +min=> starting from min




