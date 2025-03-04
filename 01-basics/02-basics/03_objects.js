//singleton
//ObjectCreate

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shikha",
    "full name": "Shikha Sahu",
    [mySym]: "khushi", // brackts refers to Symbol
    age: 18,
    location: "Lucknow",
    email: "shikha@google.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "shikha@google.com"
// Object.freeze(JsUser)   // now jsUser are not changable
JsUser.email = "Shikha@microsoft.com"
console.log(JsUser);



JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

