// Reduce() method

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc+ currval
// }, 0)

//acc=>accumulation

const myTotal = myNums.reduce( (acc, curr)=>acc+curr , 0)
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js-course", 
    price: 2999
  },
  {
    itemName: "mobile-dev course", 
    price: 5999
  },
  {
    itemName: "data science course", 
    price: 12999
  },
  {
    itemName: "python course", 
    price: 999
  },
  {
    itemName: "cpp-course", 
    price: 199
  },
 
]

const priceToPay= shoppingCart.reduce((acc,item) => item.price+acc , 0)
// console.log(priceToPay);

const marks=[
 { 
  subject: "science",
  marks: 99
},
 { 
  subject: "Maths",
  marks: 95
},
 { 
  subject: "English",
  marks: 98
},
 { 
  subject: "social-science",
  marks: 95
}
]

const totalMarks = marks.reduce( (acc, subject) => subject.marks + acc, 0)
console.log(totalMarks);