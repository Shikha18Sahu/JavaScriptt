//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]
const myArr2= new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(4)
// myArr.shift()
// console.log(myArr.includes(0))

const newArr = myArr.join()  //bind the array and convert it to strings
console.log(myArr);
console.log(typeof newArr);


//slice, splice

// console.log("A ", myArr); 

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.slice(1,3)

// console.log(myn2);
// console.log("C ", myArr);

// let arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(1, 4));  // ['b', 'c', 'd'] → Naya array bana
// console.log(arr);              // ['a', 'b', 'c', 'd', 'e'] → Original same hai

// console.log(arr.splice(1, 3)); // ['b', 'c', 'd'] → Yeh remove ho gaye
// console.log(arr);              // ['a', 'e'] → Original change ho gaya
