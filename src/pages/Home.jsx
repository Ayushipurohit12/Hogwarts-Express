import React from 'react'
import Hero from '../component/hero/Hero'
import Navbar from '../component/navbar/navbar'

function Home({ changeTheme, currentTheme }) {
  return (
    <>
    <Navbar changeTheme={changeTheme} currentTheme={currentTheme} />
    <Hero />
    </>
    
  )
}

export default Home