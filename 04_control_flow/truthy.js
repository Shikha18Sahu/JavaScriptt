// const userEmail = "s@shikha.ai"
// const userEmail = ""
const userEmail =[]
 if(userEmail.length===0){
  // console.log("Array is empty");
 }


// if(userEmail){
//   console.log("Got"); 
// }
// else{ 
//   console.log("Don't");
// }


// falsy value

 false, 0, -0 , BigInt(0n), "", null, undefined, NaN

 //truthy value
//  except falsy value All
// ++++++++++++++++++++ Some IMportant ++++++++++++++++++++
 // "0", 'false', " ", [], {}, function(){}


 const emptyObj = {}
 if(Object.keys(emptyObj).length === 0){
  // console.log("OBject is empty");
 }


 // Nullish Coalescing Operator (??): null & undefined

 let val1; 
//  val1 = 5 ?? 10
//  val1 = null ?? 10

 let var1 = undefined ??16
 
 val1= null?? 10?? 108



//  console.log(val1);
//  console.log(var1);


//  ternary Operator

//  condition ? true : false
 const icePrice = 100
 icePrice >= 80 ? console.log("less than 80"): console.log("more than 80");