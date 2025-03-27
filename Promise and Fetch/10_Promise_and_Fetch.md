## Promise




## Fetch

Data Fetch: kisi server se data lena aur apke browser pr us data ko show krna . 
✅ Fetch API JavaScript ka ek built-in function hai jo kisi server se data retrieve karne (GET request) ya server pe data bhejne (POST request) ke liye use hota hai.
  

  ## Code
🧐 Samajhne ki Koshish Karein:
fetch() ek function hai jo kisi API se data manga raha hai.

.then(response => response.json()) ka matlab hai ki response ko JSON format me convert karna.

.then(data => console.log(data)) ka matlab hai ki jo data mila usko print karna.

.catch(error => console.log(error)) ka matlab hai agar koi error aaye to usko handle karna.

## Example
(Zomato-Like API Call)


 ## JSON 

JSON is a universal format 
it helps to exchange the data between backend and frontend

Server se aane wale data ko JSON me convert karna zaroori hota hai, taaki JavaScript usko easily process kar sake.

Server pe bhejne ke liye bhi JSON best format hai, taaki server use easily process kar sake.


## why we convert in JSON before post and why we convert it into javascript object after get from server as both are human readable: 
✅ JavaScript Object JavaScript ke andar hi kaam karta hai.
✅ JSON ek text format hai jo backend server aur APIs ke saath communicate karne ke liye use hota



✅ 1️⃣ Server hamesha JSON format me data bhejta hai, par JavaScript usko directly handle nahi kar sakta, isiliye hume response.json() ka use karna padta hai.
✅ 2️⃣ JavaScript Object aur JSON dono similar dikhte hain, par JSON ek string format hota hai, jisko JavaScript use nahi kar sakta.
✅ 3️⃣ Jab hum POST request bhejte hain, toh server sirf JSON format accept karta hai, JavaScript object nahi.
✅ 4️⃣ Agar hum JSON ko JavaScript object me convert nahi karein, toh hum uska data direct use nahi kar sakte.