import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import App from './App.jsx'

//  function MyApp(){
//   return (
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   )
//  }

//* this is custom react to understand eg of custom react and inbuilds react
// const ReactElement ={
//   type:'a',
//   Props:{
//     href:'https://google.com',target:'_blank',
//   },
//   Children:'click me to visit google'
// }


//  const anotherElement = (
//   <a href="https://google.com"target='_blank'>Visit Google</a>
//  )
// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target:'_blank'},
//   'click me to visit google'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {reactElement} */}
    <App />
  </StrictMode>,
)
