const myObject = {
  js: 'Javascript', 
  cpp: 'C++', 
  rb: "ruby", 
  swift: 'swift by apple'
}

for (const key in myObject) {
//  console.log(key);
 //  console.log(myObject[key]);
 console.log(`${key} shrtcut is for ${myObject[key]}`)

}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//  console.log(key);
//  console.log(programming[key]);

}


//Maps are not iterable in forin


const map = new Map()
map.set('IN', "India")
map.set('USA', "UNinted States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
//  console.log(key);
}