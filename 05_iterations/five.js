//++++++++++++++++++++++ foreach +++++++++++++++++++++++++++++++++++++++


const coding = ["js", "ruby", "java" , "py", "cpp"]

coding.forEach( function (item) {
  // console.log(item);
} )

coding.forEach( (item)=> {
  console.log(item);
  
})

function printMe(item){
  // console.log(item);
}

// coding.forEach(printMe);  //give only refrence not execute


coding.forEach( (item, index, arr)=> {
//  console.log(item, index, arr);
})


const myCoding = [
  {
    languageName: "javascript", 
    languageFileName: "js"
  },
  {
    languageName: "java", 
    languageFileName: "java"
  },
  {
    languageName: "Python", 
    languageFileName: "py"
  },
  {
    languageName: "C++", 
    languageFileName: "cpp"
  }
]

myCoding.forEach( (item)=> {
  
  //  console.log(item.languageName)
})

