//Dates

let myDate = new Date()
console.log(myDate);   //2026-05-08T08:13:47.992Z
console.log(typeof(myDate.toString()));  //string
console.log(myDate.toDateString());   //Fri May 08 2026
console.log(myDate.toLocaleString());   //8/5/2026, 1:41:38 pm
console.log(myDate.toLocaleDateString());   //8/5/2026
console.log(myDate.toISOString());   //2026-05-08T08:11:38.823Z
console.log(myDate.toJSON());   //2026-05-08T08:11:38.823Z
console.log(typeof myDate);   //object;

//let myCreatedDate = new Date(2005,6, 9)   // 9/7/2005
//let myCreatedDate = new Date(2005, 0, 9, 5, 3, 8)   // 9/1/2005, 5:03:08 am
let myCreatedDate = new Date("02-14-2023") 
// console.log(myCreatedDate.toLocaleString());    //14/2/2023, 12:00:00 am

let myTimeStamp = Date.now()
 //console.log(myTimeStamp);  // using for winner in any poll
 //console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);              //2026-05-08T09:03:18.725Z
console.log(newDate.getDay());   //5

newDate.toLocaleString('default',{
  weekday:"long",
})

console.log(newDate); 

