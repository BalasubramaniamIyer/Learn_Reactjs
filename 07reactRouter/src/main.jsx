import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../components/Home/Home.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact/Contact.jsx'
import User from '../components/User/User.jsx'
import Github, { githubInfoLoader } from '../components/Github/Github.jsx' 
// import { createRoutesFromElements, Route } from 'react-router-dom'
import './App.css'
// ! Object way of creating routes
//? I refer to this because we are creating routes using an array of objects where each object represents a route and its properties like path and element.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader
      }

    ]
  }
])

// ! JSX way of creating routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//     )
// )

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
