import { useCallback, useState, useEffect, useRef, use } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (symbols) str += "!@#$%^&*()-+~"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }
    setPassword(password)
  }, [length, numbers, symbols,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      window.navigator.clipboard.writeText(password)
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 101)
    }
    else {      console.log("passwordRef is null")
    }
  }, [password])

   useEffect(() => { generatePassword() }, [length, numbers, symbols, generatePassword])
  return (

  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-70 bg-gray-800 text-orange-500">
    <h1 className='text-3xl font-bold  text-center mt-10 text-white '>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 my-6 bg-gray-100">
            <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-1 px-3 text-bold text-lg' 
            placeholder='Password'  
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-3 " >
              Copy
            </button>
            
      </div> 
      <div className='flex text-sm gap-x-2 gap-y-3'>
        <div className='fles items-center gap-x-2'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label className='flex items-center gap-x-2'>
            <span className='text-xl'>Length : {length}</span>
          </label>
        </div>
        <div className='fles items-center gap-x-2'>
          <input type="checkbox" id='numbers' defaultChecked={numbers} onChange={() => {setNumbers((prev) => !prev)}} />
          <label className='text-xl'>Numbers</label>
        </div>
        <div className='fles items-center gap-x-2'>
          <input type="checkbox" id='symbols' defaultChecked={symbols} onChange={() => {setSymbols((prev) => !prev)}} />
          <label className='text-xl'>Symbols</label>
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={generatePassword}>
          Generate Password
        </button>       
      </div>
    </div>
)}

export default App
