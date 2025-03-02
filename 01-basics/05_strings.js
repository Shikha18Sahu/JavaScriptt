const name = "shikha"
const repocount = 50

// console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`) ; //modern way

const gameName = new String("shikha-sahu")

console.log(gameName[2]);    //i
console.log(gameName.__proto__);  //{}



console.log(gameName.length);   //10
console.log(gameName.toUpperCase());   //SHIKHASAHU
console.log(gameName);         //[String: "shikhasahu"]  
console.log(gameName.charAt(3));   //k
console.log(gameName.indexOf('a'));   //k

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "      shikha    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/shikha20%sahu"
console.log(url.replace('20%', '-'));
console.log(url.includes('shikha'))

console.log(gameName.split('-'))


//Go to all method on mdn website 
