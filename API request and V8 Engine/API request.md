## API(Application Programming Interface) request => 
Browser aur server( do applivations) ke beech data ka exchange 



## API Request Ka Process – Step by Step
1️⃣ Browser (ya koi app) server se data maangta hai → (Request bhejta hai)
2️⃣ Server request ko process karta hai
3️⃣ Server browser ko data wapas bhejta hai → (Response deta hai)
4️⃣ Browser us data ko user ko show karta hai



## 🚀 V8 Engine Ka Working – Step by Step
1️⃣ JavaScript code ko parse (analyze) karta hai
2️⃣ Usko machine code me convert karta hai (Jo CPU directly samajh sake)
3️⃣ Optimize karta hai taaki execution fast ho
4️⃣ Code ko execute karta hai (Output deta hai)



## Example:
Agar aap Google pe "Weather in Delhi" search karti hain, toh:
✔ Aapka browser ek API request bhejta hai (Google ke server ko)
✔ Google ka server weather ka data fetch karta hai
✔ Google ka server browser ko wapas data bhejta hai
✔ Browser us data ko dikhata hai



## ➡️ Toh data exchange do taraf se ho raha hai:
✔ Browser se request ja rahi hai
✔ Server se response aa raha hai



## Fetch
fetch('https://api.example.com/data')  
  .then(response => response.json())  
  .then(data => console.log(data))  
  .catch(error => console.log('Error:', error));


  // 🔸 fetch() ka kaam hai API se data maangna aur response ko handle karna.
  // 🔸 then(response => response.json()) → Response ko JSON format me convert karta hai.
  // 🔸 catch(error => console.log('Error:', error)) → Agar request fail ho jaye toh error handle karta hai.



## Note: 
 API response usually JSON (JavaScript Object Notation) format me aata hai.



##   API Method 
//   Method	             Purpose             Example Use Case
  // GET	   Data fetch karna	                 YouTube video dekhna,Google search, 
  // POST  	 Naya data add karna	             Instagram pe post upload karna
  // PUT	   Pura data update karna            Online profile details change karna
  // PATCH	 Sirf kuch fields update karna	   WhatsApp DP change karna
  // DELETE	 Data delete karna	               Facebook comment delete karna
  

## readyState ke Different Values

  // 0	UNSENT              	Request create ho gayi, but abhi open() call nahi hua.

  // 1	OPENED               	open() call ho gaya, request setup ho gayi.

  // 2	HEADERS_RECEIVED    	Server ne request accept kar li aur headers bhej diye.

  // 3	LOADING	              Server response bhej raha hai, par abhi pura nahi aaya.

  // 4	DONE	                Response pura mil gaya, ab hum ise use kar sakte hain


  ## Questions on API

  // 1️⃣ API ka full form kya hai?
  // 2️⃣ API request me "request" aur "response" ka kya role hota hai?
  // 3️⃣ API request ka ek real-life example dijiye.
  // 4️⃣ JavaScript me API request bhejne ke liye kaunsa function use hota hai?  //fetch
  // 5️⃣ API ka response kaunse format me aata hai?   //JSON
     
## 🔹 V8 Engine – Questions

  // 6️⃣ V8 Engine kya karta hai?  
  // 7️⃣ V8 Engine kis company ne develop kiya?
  // 8️⃣ V8 Engine ka main kaam kya hai JavaScript execution me?
  // 9️⃣ V8 Engine JavaScript ko kis language me convert karta hai?
  // 🔟 V8 Engine kaha use hota hai? (Browser ke alawa)

  
  