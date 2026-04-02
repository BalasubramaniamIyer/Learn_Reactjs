import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  return (
    // Changed h-170 to standard Tailwind classes (min-h-screen makes it full height)
    <div className='min-h-161 flex flex-col justify-center items-center bg-gray-100'>
      
      {/* Fixed the typo in the class name */}
      <h1 className='text-7xl text-center text-gray-800 p-4'>
        {data.name} 
      </h1>
      <br />
      
      {/* Used the dynamic data.avatar_url and standard Tailwind sizing (w-64 = 256px) */}
      <img 
        src={data.avatar_url} 
        alt="avatar" 
        className='w-64 h-64 rounded-full mx-auto p-4 shadow-lg' 
      /> 
      <br />
      
      <h1 className='text-5xl text-center text-gray-800 p-4'>
        Followers: {data.followers}
      </h1>

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/BalasubramaniamIyer')
  return response.json()
}