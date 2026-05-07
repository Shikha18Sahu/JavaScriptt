let score = "33"
// console.log(typeof score);  //string
// console.log(typeof(score));  //string
// conversion issue
let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);   //33  convertable


let someNumber = "shikha"
let stringNumber = Number(someNumber)
console.log(stringNumber);  // NaN not convertable
console.log(typeof stringNumber);  //number


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);   //33
console.log(typeof stringNumber);  //string


let score = "33abc"
// console.log(typeof score);  //string
// conversion issue
let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);   //NaN (not a number) not convertable

let score = null
// console.log(typeof score);  //object
// console.log(typeof(score));  //object
// conversion issue
let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);   //0


let score = undefined
// console.log(typeof score);  //undefined
// console.log(typeof(score));  //undefined
// conversion issue
let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);   //NaN (not a number) not convertable




// Conclusion
// "33" => 33(value)  number(data type), after typecasting
// "33abc" => NaN   number(after typecasting)
// true => 1; false =>0   number
// "shikha" => NaN, in after typecasting in number   imp : not convertable 
// null=> 0 number


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=> true; 0 => false
// "" => false 
// "shikha" => true



// **************** Operations **************

let value = 3
let negValue = -value
// console.log(negValue); //-3

console.log(4+3); // 7
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 8
console.log(3/2); // 1.5
console.log(2%3); // 2

let str1 = "shikha"
let str2 = " sahu"

let str3 = str1 + str2;
console.log(str3); 

console.log("1" + 3);  //13
console.log(1 + "3");  //13
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32

console.log(+true);  //1
console.log(+"");  //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// ++gameCounter;   //101
gameCounter++;   //101
    
console.log(gameCounter);
