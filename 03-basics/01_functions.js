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



// function func1(){
//     return 2
// }
// function func2(){
//     return 4
// }
// let a = (func1(),func2())

// console.log(a);

//you're using the comma operator , in the expression let a = (func1(), func2()). 
// The comma operator evaluates both func1() and func2(), but only the result of the last function (in this case, func2()) is 
// returned and assigned to the variable a.


// <----------------------------------------------------------------------------------------->
// const arr = ['one','two','three'];
// const str = 'Hello';

// const res = arr.includes('on');
// const anotherVar = arr.includes('onetwo');
// const newVar = str.includes('ll');
// console.log(res);  //false
// console.log(anotherVar);  //false
// console.log(newVar);    //true
// includes give boolean  value

// <----------------------------------------------------------------------------------------->

//console.log(true == '');
// The == operator in JavaScript performs type coercion (i.e., it tries to convert the values to the same type before comparing them).
// true is converted to the number 1.
// ' ' (a non-empty string) is coerced into a number, which becomes 0.
// Hence return false 

// <----------------------------------------------------------------------------------------->

// console.log('1' == 1); // True
// console.log('1' === 1); //false
// Ans -> Becoz,, The == operator allows type coercion ,,,,The === operator in 
// JavaScript is the strict equality operator. It checks for both value and type equality,
//  meaning it does not perform type coercion.

// <----------------------------------------------------------------------------------------->


//  let a =10;
// let b = new Number(10);
// let c =10
// console.log(a === b);
// Ans ->  a is number
// while  b is a number object // Number constructor mein wrap h ..
// hence  a strict operator checks the data type and the number , hence it will return false 

// <----------------------------------------------------------------------------------------->
// let  a ={name: 'Adarsh'};
// let z ={...a};  //{name:'Adarsh'}
// z.name = "Aadil" ; //{name:'Adil'}
// console.log(a.name); //{name:'Adarsh'}

// <----------------------------------------------------------------------------------------->

// console.log(+true) // 1
// + operator is used to convert its operand to a number.
// <----------------------------------------------------------------------------------------->
// console.log(+false) // 0
// console.log(!"xyz");  //false
// <----------------------------------------------------------------------------------------->

// function curryFunction(a){
//     return function(b){
//        const mult = a*b; 
//        return function(c){
//             return  mult *c
//        }
//     }
// }
// console.log(curryFunction(2)(3)(2));

// curryFunction(2)  // Returns function(b)
// curryFunction(2)(3)  // Returns function(c), mult = 6
// curryFunction(2)(3)(2)  // Returns 12 (6 * 2)

// const str1 ="Hello";
// const str2 ="World 1234";
//<---------------------------------------------------------->
// function mergeTwoString(){
//     let res = '';
//     let i = 0;
//     while(i<str1.length || i<str2.length){
//         if(i<str1.length){
//             res += str1[i];
//         }
//         if(i<str2.length){
//             res += str2[i];
//         }
//         i++;
        
//     }
//     return res;
// }
// console.log(mergeTwoString()); //HWeolrllo 1234

//<---------------------------------------------------------->
// sum(2,4)
// sum((2)(4))

// function sum(a ,b){
//   return 
// }

// const arr = [[1,2],[3,4],[5,6]];
// const res = arr.flat();
// console.log(res);
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// By default, flat() method only flattens the array with one level depth, but you can also pass an optional argument to specify the depth.

function flattenTheArray(val,res){

  for(let i=0; i<val.length; i++){
    if(Array.isArray(val[i])){
    flattenTheArray(val[i],res)
  }
else{
  res.push(val[i]);

}
}
return res
}
console.log(flattenTheArray(arr,res));


// Qs 1: How will do the basic setup of react project?
// Qs 2: How will you call it like the Project?
// Qs 3: React is library or framework?
// Qs 4: Which is more prefered : React Js or Angular Js?
// Qs 5: What is the advantage of react over angular?
// Qs 6: What is the role of node modules folder?
// Qs 7: Functional components are stateless or statful componenets?
// Qs 8: What is the rule of fragents jsx?
// Qs 9: What is Jsx?
// Qs 10: What are hooks with which you have work?
// Qs 11: Life Cycle methods?
// Qs 12: Mounting and unmounting Phase
// Qs 13: Difference between fetch and exus
// Qs 14: components of Redux
// Qs 15: Difference between client side rendering and server side rendering
// Qs 16: Web workers
// Qs 17: formatting in HTML
// Qs 18: difference between bold and strong
// Qs 19: differnece between meter tag and progress tag
// Qs 20: What is use of required attribute
// Qs 21: what is data list
// Qs 22: Difference between em tag and i tag
// Qs 23: Empty tag
// Qs 24: Difference between div tag and span tag
// Qs 25: Dfference between display ( null )and visibility
// Qs 26: how can overlap elements in css
// Qs 27: Specificity in Css
// Qs 28: how can add gradient in css
// Qs 29: Difference between Flex work and grid Flex work
// Qs 30: WHat do you mean by 3D (grid)
// Qs 31: Difference between grid and flexbox
// Qs 32: CSS overflow
// Qs 33: what is used for image relection 
// Qs 34: what are attribute selector
// Qs 35: what is pseudo eleemnt in css















