import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Details from '../Pages/Details'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
  return (
    <div>
        <Navbar/>
        <div>
        
        
        <Outlet/>
        </div>    
        <Footer/> 
    </div>
  )
}

export default Layout1