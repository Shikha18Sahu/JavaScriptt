// const tinderUser = new Object()  //Singleton Object 
const tinderUser = {}    //Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "shikha"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname : {
    userfullname : {
      firstname: "Shikha", 
      lastname: "Sahu"
    }
  }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "d", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
  // console.log(obj3);

  const users = [
    {
       id: 1,
       email: "s@gmail.com"
    },
    {
       id: 2,
       email: "s@gmail.com"
    },
    {
       id: 3,
       email: "s@gmail.com"
    },
  ]

  // users[1].email
  // console.log(tinderUser);

  // console.log(Object.keys(tinderUser));
  // console.log(Object.values(tinderUser));
  // console.log(Object.entries(tinderUser));
  console.log(Object.prototypeisPrototypeOf(tinderUser));


  console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
  coursename : "js in hindi",
  price: "999",
  courseInstructor: "Shikha"
}

//course.courseInstructor  like very long and ajeeb so

const {courseInstructor} = course 
console.log(courseInstructor)  //Shikha
const {courseInstructor: Instructor} = course 
console.log(Instructor)  //Shikha


// API in object form
{
  "name" : "SHikha" ,
  "coursename": "js in hindi", 
  "price": "free"
}

// API in array form
[
  {},
  {},
  {}
]


//search randomuser me api on google
//for understanding API go some as json foramter a

