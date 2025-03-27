let interValid ;
const randomcolor = function(){
  const hex= "0123456789ABCDEF";
  let color = '#';
  for( let i = 0 ; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const changebc = function(){
  let newColor =randomcolor()
  document.body.style.backgroundColor=newColor;

  document.getElementById('colorCode').textContent = `Current Color: ${newColor}`;
};


document.querySelector('#start').addEventListener('click', function (){
  if(!interValid){
    interValid = setInterval(changebc, 1000);
    console.log(interValid);
    document.getElementById('statusMessage').textContent = "Color Changing Started!";
  }
});


document.querySelector('#stop').addEventListener('click', function(){
  clearInterval(interValid);
  interValid= null;
  document.getElementById('statusMessage').textContent = "Color Changing Stopped!";
});

document.querySelector('#reset').addEventListener('click', function(){
  document.body.style.backgroundColor = "#212121";
  document.getElementById('colorCode').textContent = "Current Color: #212121";
  document.getElementById('statusMessage').textContent = "Click Start to change the background color.";
});

// Aap "Start" button click karte hain → setInterval(changebc, 1000) har second ek naya color set karta hai.

// Aap "Stop" button click karte hain → clearInterval(interValid); interval ko stop kar deta hai.