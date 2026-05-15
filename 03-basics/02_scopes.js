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
  console.log(website);

  two()
}

// one is a home and two is a room ... room vala ghr ke andr ka sb dekh skta hai bt home room ki private nhi dekh skta ...

if(true){
  const username= "Shikha"
  if(username==="Shikha"){
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);



// ++++++++++++++++  interesting  +++++++++++++++++++
console.log(addone(5))
function addone(num){
         return num + 1
}



// const addTwo = function (num){
//   return num +2
// }   //7
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
