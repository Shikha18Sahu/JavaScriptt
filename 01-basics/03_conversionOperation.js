let score = "33abc"

// console.log(typeof score); //string
// console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  
console.log(valueInNumber);   


// "33" => 33(value)  number(data type), after typecasting
// "33abc" => NaN   number(after typecasting)
// true => 1; false =>0   number
// "shikha" => NaN, in after typecasting in number
// null=> 0 number

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0 => false
// "" => false 
// "shikha" => true

let someNumber = 33
 
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **************** Operations **************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(4+3);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(3/2);
// console.log(2%3);

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