const insert = document.getElementById('insert');

window.addEventListener('keyup', (e) =>{  
  insert.innerHTML = `
  <div class = 'color'>
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' '? 'Space' : e.key}</td>  
        <td>${e.keyCode}</td>  
        <td>${e.code}</td>  
      </tr>
    </table>
  </div>
  `;
});



//why html code used: bcs hme sirf ek fixed tabel nai chaiye hme user ki pressed key ka data show krna hai dynamically 



// e => event Object (kab bhi koi event listener (keydown, keyup, click, etc.) trigger hota hai, toh ek event object automatically function ko pass hota hai.)



// e.key =>   give name of key pressed
// e.keyCode => give numerical code
// e.code =>  give technical name 



// keydown → Jab key press hoti hai, tab turant event trigger hota hai.
  // 🔹 Example: Jaise hi "A" press karoge, turant "A" show ho jayega.
  
// keyup → Jab key chhodte ho (release karte ho), tab event trigger hota hai.
// 🔹 Example: "A" key press karne ke baad jab usko chodoge, tab event chalega.


  

// `  ` Backtick sign  =>Backtick Template Literals (Template Strings) ke liye use hota hai.
// Yeh modern JavaScript (ES6) ka feature hai jo multi-line strings aur variables ko embed karne ke liye helpful hota hai.