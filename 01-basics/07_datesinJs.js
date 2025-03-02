//Dates

let myDate = new Date()
//console.log(typeof(myDate.toString()));
//console.log(myDate.toDateString());

 //console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());

//console.log(myDate.toISOString());
 //console.log(myDate.toJSON());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2005,6, 9)
 //let myCreatedDate = new Date(2005, 6, 9, 5, 3, 8)
let myCreatedDate = new Date("02-14-2023")

//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

 //console.log(myTimeStamp);
 //console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
  weekday:"long",
})


