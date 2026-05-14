//singleton-- cunstructor se
//Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Shikha",
    "full name": "Shikha Sahu",
    [mySym]: "khushi", // square brackts refers to Symbol
    age: 18,
    location: "Lucknow",
    email: "shikha@google.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)   // shikha@google.com  // not a right way generally
console.log(JsUser["email"])   // shikha@google.com
console.log(JsUser["full name"])   // Shikha Sahu   //.se access nhi kr skte
console.log(JsUser[mySym])   // khushi .

JsUser.email = "shikha@google.com" 
Object.freeze(JsUser)   // now jsUser are not changable // values are lock 
JsUser.email = "Shikha@microsoft.com"
console.log(JsUser);   //shikha@google.com

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`); // same object ko reference krn aho to this 
}
console.log(JsUser.greeting);  // function (anonymous)
console.log(JsUser.greeting());    // Hello JS user
console.log(JsUser.greetingTwo());    // Hello JS user, Shikha 

