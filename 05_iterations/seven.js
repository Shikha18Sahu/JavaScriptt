const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNumbers.map( (num) => num + 10)
// console.log(newNums);

//chaining

const newNums = myNumbers
           .map((num) => num *10)     // 10, 20, 30, 40, 50, 60, .......
           .map( (num) => num + 1)   //11, 21,31,41.........
           .filter( (num)=> num>=40)
// console.log(newNums);


