import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function layout() {
  return (
   <>
     <Header/>
     <Outlet/>
     <Footer/>
   </>
  )
}

export default layout