### **React ka Flow (kaam kaise hota hai)**



##### 1️⃣ App start kaise hoti hai?

###### 

###### index.html

###### &nbsp;  ↓

###### main.jsx / index.js

###### &nbsp;  ↓

###### App.jsx

###### &nbsp;  ↓

###### Components

##### 

#### **2️⃣ index.html (sirf ek div)**



###### <div id="root"></div>

###### 📌 React **isi div ke andar** poori app inject karta hai

###### Isi liye React app ko **Single Page Application** kehte hain.



#### **3️⃣ main.jsx / index.js (entry point)**


<!-- *import React from "react";
*import ReactDOM from "react-dom/client";
*import App from "./App";
*ReactDOM.createRoot(document.getElementById("root"))
 * .render(<App />); -->
*



###### **👉** Ye file React ko kehti hai:

###### “App component ko root div mein render karo”



#### **4️⃣ App.jsx (parent component)**
 function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

###### **📌 App poori website ka main container hota hai**

###### **Baaki sab iske child components hotay hain.**



###### 5️⃣ Component structure (building blocks 🧩)



**function Button() {**

  **return <button>Click me</button>;**

**}**



###### **Component =**

###### 

###### **JavaScript function**

###### 

###### **Jo JSX return karti hai**

<!-- **************************************************** -->
<!-- React kya hai? 👇 -->

React ek JavaScript library hai jo user interfaces (UI) banane ke liye use hoti hai — especially single-page applications (SPA) ke liye.

Simple words mein:
👉 React se hum fast, interactive aur dynamic websites / web apps banate hain.

React ki basic samajh

🧩 Component-based
React mein app chhote chhote components se banti hai
(jaise: Navbar, Button, Form, Card)

⚡ Fast performance
React Virtual DOM use karta hai, is liye page jaldi update hota hai

🔄 Reusable code
Ek component bar-bar use ho sakta hai

📦 JavaScript + HTML (JSX)
React mein HTML jaisa code JS ke andar likhte hain (JSX)


<!-- ********************************** -->
<!-- jab hamaray pass js thi to phir react ki zarorat q pari? -->
2️⃣ Real problem: DOM manipulation 😵

JavaScript mein:

Hamein khud decide karna hota tha
kya change hua
kahan change hua
kaise update karna
Ye kaam
Time consuming
Error-prone

React ne kya solution diya? ✅
🔹 React ne kaha:

“Tum bas ye batao UI kaisa dikhna chahiye,
DOM update ka kaam mujhe karne do.”
