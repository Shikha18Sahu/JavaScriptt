//-------------   array declaration  -------------
const arr = [0,1,2,3,4, true, "shikha"] // can contain A MIX of different datatypes. 
const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]
const myArr2= new Array(1,2,3,4)
console.log(myArr[1]);  //1
//shallow copy- properties share the same reference ----- original array will change
// deep copy - properties do not share the same reference   ---- does not effect on original array

//------------- Array Methods  -------------
myArr.push(6) // [0, 1, 2, 3, 4, 5, 6]
myArr.pop()   // [0, 1, 2, 3 ,4, 5]
myArr.unshift(4) //  [4, 0, 1, 2, 3,4 , 5]   shift all element to right side
myArr.shift()  //  [ 0, 1, 2, 3, 4 ,5]    remove first element (shift)
console.log(myArr.includes(0))  // true;   // boolean type

const newArr = myArr.join()  //bind the array and convert it to strings  
console.log(myArr);  // 0, 1, 2, 3, 4, 5
console.log(typeof newArr);  // string

// ----------Important--------------  (slice, splice)   ----------Important--------------

console.log("A ", myArr);  // A [1, 2, 3, 4, 5]

const myn1 = myArr.slice(1,3)  
console.log("B ", myArr);  // B [ 0,1 ,2 ,3, 4, 5]
console.log(myn1);  //  [1,2]

const myn2 = myArr.splice(1,3) //  [1,2,3]
console.log("C ", myArr);   // C [0, 4, 5]
console.log(myn2); // [0, 4, 5]


let arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(1, 4));  // ['b', 'c', 'd'] → Naya array bana
// console.log(arr);              // ['a', 'b', 'c', 'd', 'e'] → Original same hai

 console.log(arr.splice(1, 3)); // ['b', 'c', 'd'] → Yeh remove ho gaye
 console.log(arr);              // ['a', 'e'] → Original change ho gaya


