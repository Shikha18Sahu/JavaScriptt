// var c = 300
let a = 200

if (true) {
  let a = 10
  const b = 20 
 c = 3000
//  console.log("INNER", a);
}

//++++++++++++ block space, global space ++++++++++++++++++++++++++++++  

// console.log(a);
// console.log(b);
// console.log(c);

//Nested Scope

function one(){   // smjhna hai 
  const username = "shikha"

  function two(){
    const website = "Youtube"
    // console.log(username);
  }
  // console.log(website);

  two()
}

// one()

if(true){
  const username= "Shikha"
  if(username==="Shikha"){
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);



// ++++++++++++++++  interesting  +++++++++++++++++++
console.log(addone(5))
function addone(num){
         return num + 1
}


console.log(addTwo(5))
const addTwo = function (num){
  return num +2
}

