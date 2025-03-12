// Immediately Invoked Function Expressions (IIFE)
// Global scope le pollution ke problem se bchne ke liye iife ka use krte hain

(function chai(){
//named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  //unnamed IIFE
   console.log(`DB CONNECTED TWO ${name}`);
})('shikha')


// Code kaise execute hota hai ??
//++++++++++++++ JavaScript Execution Context ++++++++++++++++

// 1. Global Execution Context (Delete after ending the kaam)
// 2. Function Execution Context
// 3. Eval Execution Context


// Example: 
let val1 = 10
let val2 = 5
function addNum (num1, num2){
  let total = num1+ num2 
  return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10,2)


// 1. Global Execution/ Global environment -> this

// 2. Memory Creation Phase  -> 

// val1-> undefined, 
// val2-> undefined,
//  addnum-> definition of function , 
// result1 = > undefined , 
// result2 -> undefined

// 3. Execution Phase  -> 

// val1-> 10 ,
// val2-> 5 ,
// addNum -> new variable environment + Execution thread. 

//Call Stack
