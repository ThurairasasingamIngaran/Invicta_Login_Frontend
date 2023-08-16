import React from 'react'

import Navbar from './Layout/Navbar'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Details from './Pages/Details'
import Layout1 from './Layout/Layout1'
import Raji from './Pages/Raji'


export const routes = createBrowserRouter([
    
    {
      path: '/',
      element: <Login/>,
     
    },
    {
      path: '/Register',
      element:<Register/>,
     
    },
  
    {
      path: `/Home`,
      element:<Layout1/>,
      children:[ 
  
        { path:'details', element:<Details/>},
        { path:'raji', element:<Raji/>},
      ],
  
    },
]
)