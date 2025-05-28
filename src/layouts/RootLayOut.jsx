import React from 'react'
import Navbar from '../Sheared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Sheared/Footer'

function RootLayOut() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default RootLayOut