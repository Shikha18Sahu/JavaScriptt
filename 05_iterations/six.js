//++++++++++++++++ filter +++++++++++++++++ foreach ++++++++++++++++++++++++++++++++++++




// const coding = [ "js", "ruby" , "java", "python"]
// const values = coding.forEach( (item)=> {
//   // console.log(item);
  // return item           //foreach return nai krega
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (num) => num > 4)
// const newNums= myNums.filter( (num) =>{
//   return num>4
// } )



// using forEach method


const newNums = []
myNums.forEach ( (num)=> {
  if(num>4){
    newNums.push(num)
  }
})
// console.log(newNums);

const books =[ 
  {title: 'Book One', genre: 'Fiction', publish: 1981, edititon: 2004},
  {title: 'Book Two', genre: 'Non-Fiction', publish: 1999, edititon: 2004},
  {title: 'Book Three', genre: 'History', publish: 1981, edititon: 2084},
  {title: 'Book Four', genre: 'Non-Fiction', publish: 1981, edititon: 2004},
  {title: 'Book Five', genre: 'Science', publish: 1981, edititon: 2704},
  {title: 'Book Six', genre: 'Fiction', publish: 2000, edititon: 2014},
  {title: 'Book Seven', genre: 'History', publish: 2081, edititon: 2004}
];

// const userBooks = books.filter((bk) => bk.genre ==='History');
const userBooks = books.filter((bk) => {
  return bk.publish>=2000 && bk.genre ==='History'
});
// console.log(userBooks);