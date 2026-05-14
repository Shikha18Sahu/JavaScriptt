//singleton-- 
//Object.create
// object literals and constructors

// Object LIteral : 
const user = {
   name: "Shikha",
   age: 20
};

// cunstructor
function Student(name, age){
   this.name = name;
   this.age = age;
}
const s1 = new Student("Shikha", 20);
const s2 = new Student("Rahul", 21);

//singleton 
const principal = {
   name: "Mr. Sharma"
};

//Object literals directly create a single object using {} syntax,
// while constructors are used to create multiple objects with similar structure using the new keyword. 
//A singleton means only one instance of an object exists throughout the application.

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

