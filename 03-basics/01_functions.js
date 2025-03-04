function sayMyName(){
  console.log("S")
  console.log("H")
  console.log("I")
  console.log("K")
  console.log("H")
  console.log("A")
}

// sayMyName();    //execute the function 
// sayMyName();


// function addTwoNumbers(number1, number2){  //parameters
//   console.log(number1 + number2)
// }

// addTwoNumbers(0,0)                //arguement
// addTwoNumbers(null, null)
// addTwoNumbers(3,0)
// addTwoNumbers(4, "50")
// addTwoNumbers("4",4)



//Important
// function addTwoNumbers(number1, number2){ 
//   console.log(number1 + number2)
// }
// const result = addTwoNumbers(3,5)

// console.log("RESULT: " , result);   //undefined as after calling addTwoNumbers it only print not return the value so result have not value to store so it show undefined.


function addTwoNumbers(number1, number2){ 

  // let result = number1 + number2
  // return result
  return (number1 + number2)
  
  console.log("Shikha");  //not print as after return 
  
}
const result = addTwoNumbers(3,5)

// console.log("RESULT: " , result); 

//Jab function me return; likhte hain bina kisi value ke, toh JavaScript automatically undefined return karti hai.
// aur agr username ko funtion ke andr ek value fixed kr doge to undefined nai show hoga bin value ke vo show hoga as KHUSI



function loginUserMessage(username = "khuhsi"){
  if(!username){    //jab usename nai diya hoga
     console.log("PLease enter a username");
     return     //function yhin return ho jayega (undefined return krega)
  }
  return `${username} just logged in `
}

// console.log(loginUserMessage("Shikha"))
// console.log(loginUserMessage())    //undefined just logged in



function calculateCartPrice(...num1) {  //rest Operator
   return num1   // return in array
}

// console.log(calculateCartPrice(9,8,2))


function calculateCartPrice(val1 , val2, ...num1) {  //rest Operator
  return num1   // return in array
}

console.log(calculateCartPrice(9,8,2,4))  // in num1 : 2,4  

const user = {
  username: "hitesh", 
  price : 99
}

function handleObject (anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  // undefined on the case of not matching variables
}

// handleObject(user)
handleObject({
  username: "sam", 
  price: 399
})

const myNewArray = [ 200,300,400]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));