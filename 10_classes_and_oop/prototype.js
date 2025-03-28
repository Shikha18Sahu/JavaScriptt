// let myName = "Shikha     "
// let mychannel = "youtubeshikha    "
// // console.log(myName.trim().length);
// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer", 
  spiderman: "sling",

  getSpiderPower: function(){
    console.log('Spidy power is ${this.spiderman}');
  }
}


Object.prototype.hitesh = function(){
  console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
  console.log(`SHikha says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// heroPower.heyHitesh()   //error
// myHeros.heyHitesh()


//Inheritance

const User = {
  name: "shikha",
  email: "shikha@google.com"
}



const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'jS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__= User


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername= "ChaiAurCode     "

String.prototype.trueLength = function(){

  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
  
}

anotherUsername.trueLength()
"hitesh".trueLength()
"shikhasahu".trueLength()


Theory: 


Jab bhi aap JavaScript me ek object ya function create karte hain, JavaScript uske sath ek hidden property attach karta hai, jise [[Prototype]] kehte hain. Is [[Prototype]] property me ek reference hota hai kisi aur object ka, jo us object ke methods ya properties ko inherit kar sakta hai.