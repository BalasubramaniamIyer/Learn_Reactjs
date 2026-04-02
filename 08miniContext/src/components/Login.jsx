import React, {useState, useContext}  from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  }
  return (
    <div className='max-w-md mx-auto p-4'>
      <h2 className='text-xl font-bold mb-4 m-4'>Login</h2>
      <input type="text"
      value={username}
    onChange={(e) => setUsername(e.target.value)}
      placeholder='Username'
      className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4'/>
      <input type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'
      className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4'/>
      <br />
        <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
          Submit
        </button>
    </div>
  )
}

export default Login
