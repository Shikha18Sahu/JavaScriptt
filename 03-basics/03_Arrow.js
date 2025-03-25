// this-> current context refer  and  Arrow Function



const user = {
  username: "Shikha", 
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to my website`)
    // console.log(this);
  }

}

// user.welcomeMessage()

// user.username = "Lori"
// user.welcomeMessage()

// console.log(this);   //{}


// but in Browser ke ander global object -> window


// function chai(){
//   let username = "Shikha"
//   // console.log(this);
//   // console.log(this.username); //undefined
// }

// chai()

// const chai = function() {
//   let username = "Shikha"
//   // console.log(this);
//   // console.log(this.username); //undefined
// }



const chai = () => {
  let username = "Shikha" 
  // console.log(this);  //{}
  // console.log(this.username);  //undefined
}

// chai()


// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

               //Implicit return // -> without using return word

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => {username: "shikha"} //undefined due toremoving paranthesis

console.log(addTwo(3,4))


// const  myArray = [2,3,5,54]
// myArray.forEach(()=>)