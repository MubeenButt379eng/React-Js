 import { useState } from 'react'
import './App.css'
import Card from './component/Card'

 function App() {
  const [count, setCount] = useState(0)
  // let myObj ={
  //   name:"abdul",
  //   age :22,
  // }

  return (
    <>
      <h1 className="bg-amber-800 text-white text-center p-4">Tailwind Css using React</h1>
      <Card username="chaiAurcode" btnText = "click me"/> 
      <Card username="Abdul Mubeen " btnText ="Visit me"/> 
    </>
  )
}

export default App
 