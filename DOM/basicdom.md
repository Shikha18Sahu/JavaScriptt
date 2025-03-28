1. ## DOM Ka Full Form Aur Use
Question: DOM ka full form kya hai? Aur iska use kis liye hota hai?
Answer:
DOM ka full form hai: Document Object Model.
Use: DOM ka use HTML aur XML documents ko access, modify, manipulate karne ke liye kiya jata hai. JavaScript ke through hum DOM ko interact karte hain, jisse hum page ka content dynamically change kar sakte hain bina page reload kiye.

2. ## DOM Tree
Question: DOM Tree kya hota hai?

Answer:
DOM Tree ek hierarchical structure hota hai jisme HTML document ke elements ko nodes ki tarah represent kiya jata hai.
Root Node: Har DOM tree ka root node <html> hota hai.
Child Nodes: Uske baad saare HTML elements child nodes hote hain, jaise <head>, <body>, <div>, <p>, etc.
Example:

<html>  
  <head>...</head>  
  <body>...</body>  
</html>
Is example mein <html> root node hai, aur <head>, <body> uske child nodes hain.


3. ## HTML Elements Ko Access Karna
Question: DOM se hum HTML ke kaunse elements ko access kar sakte hain?

Answer:
Hum DOM se HTML ke saare elements ko access kar sakte hain jaise headings (<h1>, <h2>, etc.), paragraphs (<p>), classes, IDs, buttons, forms, links, etc.

## Methods to access HTML elements:
+ getElementById("id") → Specific element ko access karne ke liye.
+ getElementsByClassName("class") → Class name se elements ko access karne ke liye.
+ querySelector("selector") → CSS selector ka use karke element ko access karte hain.
+ querySelectorAll("selector") → Multiple elements ko CSS selector ke through access karte hain.


4. ## DOM Manipulation
Question: DOM Manipulation ka matlab kya hai?
Answer:

DOM Manipulation ka matlab hai HTML document ke elements ko add, remove, ya modify karna bina page ko reload kiye.
Examples:

+ Adding Elements:
createElement("element") → Naya element create karte hain.
appendChild() → Naye element ko document mein add karte hain.

+ Removing Elements:
removeChild() → Existing element ko remove karte hain.

+ Modifying Elements:
innerHTML → Element ke andar ka content modify karte hain.
style → CSS properties ko change karte hain.



5. ## DOM Events
Question: DOM Events kya hote hain, aur hum unhe kaise handle karte hain?

Answer:
DOM Events woh user interactions hote hain jo webpage ke saath ho rahe hote hain, jaise button click, mouse hover, key press, etc.

Example Events:

+ click → Jab user button ya link ko click kare.
mouseover → Jab user mouse ko kisi element par leke jaye.
+ keydown → Jab user keyboard par koi key press kare.
Event Handling:
Hum event listeners ka use karte hain jaise addEventListener("event", function), jo kisi bhi event ko handle karne ke liye trigger hota hai.

Example:
javascript
Copy
Edit
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});


## Summary of Answers with Questions:

1. DOM ka full form aur use:
Full form: Document Object Model.
Use: HTML aur XML documents ko access, modify, manipulate karne ke liye.

2. DOM Tree:
Ek hierarchical structure jisme HTML elements nodes ki tarah represent hote hain. Root node <html> hota hai.

3. HTML Elements Ko Access Karna:
Hum elements ko getElementById(), getElementsByClassName(), querySelector(), etc. se access kar sakte hain.

4. DOM Manipulation:
DOM Manipulation ka matlab hai HTML document ke elements ko add, remove, ya modify karna bina page reload kiye.

5. DOM Events:
User interactions ko handle karne ke liye DOM events ka use hota hai, jaise click, mouseover, keydown, etc., aur hum unhe addEventListener() ke through handle karte hain.



## NOte:

1. getElementById() → Sirf ek element return karta hai (ID ke through).
2. getElementsByClassName() → Multiple elements ko access karta hai (Class ke through).
3. querySelector() → First matching element ko return karta hai.
4. querySelectorAll() → All matching elements ko return karta hai.