 import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div 
      style={{ 
        backgroundColor: color, 
        width: '100vw',   
        height: '100vh',   
        margin: 0,         
        padding: 0
      }}
    >
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button 
        onClick={()=> setColor("red")}
        className="outline-none px-4 py-1 text-white shadow-sm rounded"
        style={{backgroundColor: "red"}}
        >Red</button>

            <button
             onClick={()=> setColor("green")}
            className="outline-none px-4 py-1 text-white shadow-sm rounded"
        style={{backgroundColor: "green"}}
        >Green</button>

           <button 
            onClick={()=> setColor("blue")}
           className="outline-none px-4 py-1 text-white shadow-sm rounded"
        style={{backgroundColor: "blue"}}
        >Blue</button>

           <button
            onClick={()=> setColor("orange")}
           className="outline-none px-4 py-1 text-white shadow-sm rounded"
        style={{backgroundColor: "orange"}}
        >Orange</button>

           <button 
            onClick={()=> setColor("purple")}
           className="outline-none px-4 py-1 text-white shadow-sm rounded"
        style={{backgroundColor: "purple"}}
        >Purple</button>

           <button
            onClick={()=> setColor("brown")}
           className="outline-none px-4 py-1 text-white shadow-sm rounded"
        style={{backgroundColor: "brown"}}
        >Brown</button>
      </div>
     </div>
    </div>
  )
}

export default App