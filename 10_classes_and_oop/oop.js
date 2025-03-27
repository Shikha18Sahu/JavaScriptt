const user = {
  username: "shikha", 
  loginCount: 9, 
  signedIn: true, 

  getUserDetails: function(){
    // console.log("Got user details from database")
    // console.log(`Username: ${username}`);   // username doesn't defined
    // console.log(`Username: ${this.username}`);   // this-> current context username: shikha
    console.log(this);

  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn  = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  // return this    //not need implicitly defined this
}

const userOne = new User("shikha",12, true)
const userTwo = new User("ChaiAurCode", 11, false);

console.log(userOne.constructor);
// console.log(userTwo);