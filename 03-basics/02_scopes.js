// var c = 300
let a = 200

if (true) {
  let a = 10
  const b = 20 
  var c = 3000
 console.log("INNER", a); // 10
}

//++++++++++++ block space, global space ++++++++++++++++++++++++++++++  
console.log(a);  //not defined
console.log(b);   //not defined
console.log(c);   // 3000 because of var'scope

// //Nested Scope
// Lexical Scope Meaning
// 👉 apne outer(parent) scope ke variables access kar sakta hai.

function one(){   // smjhna hai 
  const username = "shikha"
  function two(){
    const website = "Youtube"
    console.log(username);
  }
  console.log(website);  // undefined 

  two() // shikha
}
one();  // not execute

// one is a big(home) and two is a child( room )... room vala ghr ke andr ka sb dekh skta hai bt home room ki private nhi dekh skta ...

if(true){
  const username= "Shikha"
  if(username==="Shikha"){
    const website = " youtube"
    // console.log(username + website);  // print
  }
  // console.log(website);   // undefined
}
// console.log(username);  // undefined



// ++++++++++++++++  interesting  +++++++++++++++++++

// function declaration
console.log(addone(5))  // execute and print  6
function addone(num){
         return num + 1
}

 // function expression
console.log(addTwo(5)) // undefined do not use before declaration
const addTwo = function (num){
  return num +2
}   

function addTwo(num){
   return num + 2
}
console.log(addTwo(5))//7

function addTwoNumbers(number1, number2){  //parameters
  console.log(number1 + number2)
}

addTwoNumbers(0,0)         // 0       //arguement
addTwoNumbers(null, null)   //0
addTwoNumbers(3,0)   //3
addTwoNumbers(4, "50")    //450
addTwoNumbers("4",4)   //44
