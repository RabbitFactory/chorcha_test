import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'

const page = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
    </div>
  )
}

export default page