import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: bgColor }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-amber-50'>
        <button onClick={() => setBgColor("black")} className='bg-gray-800 text-sm md:text-lg px-4 py-2 rounded-md m-2'>Black</button>
        <button onClick={() => setBgColor("red")} className='bg-red-600 text-sm md:text-lg px-4 py-2 rounded-md m-2'>Red</button>
        <button onClick={() => setBgColor("blue")} className='bg-blue-600 text-sm md:text-lg px-4 py-2 rounded-md m-2'>Blue</button>
        <button onClick={() => setBgColor("green")} className='bg-green-600 text-sm md:text-lg px-4 py-2 rounded-md m-2'>Green</button>
        <button onClick={() => setBgColor("yellow")} className='bg-yellow-600 text-sm md:text-lg px-4 py-2 rounded-md m-2'>Yellow</button>
        <button onClick={() => setBgColor("purple")} className='bg-purple-600 text-sm md:text-lg px-4 py-2 rounded-md m-2'>Purple</button>
      </div>
    </div>
  );
}

export default App
