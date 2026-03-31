import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCounter] = useState(0)

  const add = () => {
  setCounter(count+1)
  console.log(count)
}

  const sub = () => {
    setCounter(()=>{
      if(count>0){
        return count-1
      }
      else{
        return count
      }
    })
    console.log(count)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={sub}>Decrement</button>
    </div>
  )
}

export default App
