const name = "shikha"
const repocount = 50
// console.log(name + repocount + " Value");   // shikha50 Value

console.log(`Hello my name is ${name} and my repo count is ${repocount}`) ; //modern way

const gameName = new String("shikha-sahu") // object
console.log(gameName[2]);    //i fro, shikha-sahu
console.log(gameName.__proto__);  // {}
console.log(gameName.length);   //11
console.log(gameName.toUpperCase());   //SHIKHA-SAHU
console.log(gameName);         //[String: "shikha-sahu"]  
console.log(gameName.charAt(3));   //k
console.log(gameName.indexOf('a')); //5


// Interview Point
// slice() does NOT modify original string
// It returns new string.
// Strings are immutable in JS.

// One More Important Difference
// substring() -> ❌ negative values support nahi karta.
// slice() ->✅ negative indexing support karta hai.

const newString = gameName.substring(0,4)
console.log(newString);   //shik

const anotherString = gameName.slice(-9,4) // length : 11 =>   11-9 = 2 => (2,4)
console.log(anotherString);  //ik

const newStringOne = "      shikha    " // whitespace
console.log(newStringOne);    //     shikha     //
console.log(newStringOne.trim());   //shikha

const url = "https://hitesh.com/shikha20%sahu"
console.log(url.replace('20%', '-'));    //https://hitesh.com/shikha-sahu
console.log(url.includes('shikha'))     //TRUE

console.log(gameName.split('-'))  //['shikha', 'sahu']


//Go to all method on mdn website 
