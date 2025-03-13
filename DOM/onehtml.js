// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
 
//   <title>DOM learning</title>
//   <style>
//     .bg-black{
//       background-color:#212121;
//       color:#fff;
//     }
//   </style>
// </head>
// <body class="bg-black">
//   <div >
//     <h1 id="title" class="heading" >DOM learning on Chair aur Code <span style= "display: none;">test text</span></h1>
//     <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus, veni.</h2>
//     <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus, veni.</h2>
//     <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus, veni.</h2>
//     <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus, veni.</h2>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//     <input type ="password" name="" id="">


//     <!--  ul>li*3 -->
//     <!-- Alternative: Multi-Cursor with Alt + Click -->
//     <!-- Press Cmd + D repeatedly to select all occurrences of . -->
//     <ul>
//       <li class="list-item">one</li>
//       <li class="list-item">two</li>
//       <li class="list-item">three</li>
//       <li class="list-item">four</li>
//     </ul>
//   </div>
// </body>
// </html>





//++++++++++++++++++++++++++++ Javascript DOM Concept +++++++++++++++++++++++++++++++++++++





document.getElementById('title') // in console you get result by inser some html element whose id title


//for id name
document.getElementById('title').id
//for class
document.getElementById('title').className
   //or
document.getElementById('title').getAttribute('id')


//changing classname
document.getElementById('title').setAttribute('class', 'another')





document.getElementById('title') //title id vala para selected
const title = document.getElementById // store in variable

title.style.backgroundColor = 'green'
title.style.padding ="10px"
title.style.borderRadius ="10px"

document.getElementsByClassName('heading')  
//HTMLCollection {........}




//+++++++++++++++++ INteResTinG +++++++++++++++++++++

title.innerText
'DOM learning on Chair aur Code'

title.textContent
'DOM learning on Chair aur Code test text'

title.innerHTML
'DOM learning on Chair aur Code <span style="display: none;">test text</span>'





//+++++++++++++++ querySelector +++++++++++++++++++

document.querySelector('h1')  // Gives only first h1 in the form of html 

document.querySelector('#title')  //for id

document.querySelector('.heading')  //for class

document.querySelector('input[type = "password"]') 

document.querySelector('p: first-child')   //null if not mention in html doc.



document.querySelector('ul') //select all ul

const myul = document.querySelector('ul')  // store in var

myul.querySelector('li')  //  select first list in ul

const turnGreen = myul.querySelector('li') 

turnGreen.style.backgroundColor = " green " // background color greeen of only first list in ul

turnGreen.innerText = "five"  // converts one to five 



//+++++++++++++++++ querySelectorAll +++++++++++++++++++++


document.querySelectorAll('li') // Selext all List in form of NodeList

const tempList = document.querySelectorAll('li') 

tempList   // Not Array but Nodelist 
// array ke andr map aur foreach dono present....inprototype

//so it wrong 
 tempList.style.color = 'green'  //wrong

 tempList[0].style.color ='green'   //right

 const myH1 = document.querySelectorAll('h1')
 myH1[0].style.color = 'blue'



//+++++++++++++ using forEach method ++++++++++++++
// +++++++++++++++ to resolve thr problem of queySelectorAll ++++++++++
// ++++++++ as it select only one element at a single time ++++++++++

 tempList.forEach( function (l) {
     l.style.backgroundColor = 'green'
 })    // isse saare list ka background color green ho jayega na ki kisi ek ka 


                         //  Note
 // agar nodelist hai to 1. forEach ka use kriye  or 2. convert firrst into array then use map 





 

// +++++++++++++++ ClassName ++++++++ HTMLCollection +++++++++++++


//mujhe saare eleemtn laakr do jiske andr class lgi ho list-item
 document.getElementsByClassName('list-item')
// HTML Collection => not forEach present or applied

 const tempClassList=  document.getElementsByClassName('list-item')

 tempClassList.forEach(function(li){
  console.log(li)
 })





 //to forEach method apply krne ke liye -> convert into Array first



 Array.from(tempClassList)     // change in array

 const myConvertedArray = Array.from(tempClassList)   

 myConvertedArray.forEach(function(li) {
  li.style.color = ' orange '
 })


