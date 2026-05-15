import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />    {/* Uses this as the base and keeps above and below same */}
    <Footer />
    </>
  )
}

export default Layout