const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  //tell hidden things

console.log(descripter);
console.log(Math.PI);    //3.14159.....
Math.PI = 5
console.log(Math.PI);    //3.14159.....

// const mynewObject = Object.create(null)

const chai = {
  name: 'ginger chai', 
  price: 250,
  isAvailable: true,

  orderChai: function(){
    console.log("chai nhi bni")
  }
}

// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name' , {
  // writable: false,
  enumerable: false,
  // configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
if(typeof value !== 'function'){
  console.log(`${key}: ${value}`);
}
}