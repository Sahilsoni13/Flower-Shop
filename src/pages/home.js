import React from 'react'
import About from '../components/home/about'
import Banner from '../components/home/banner'
import Choose from '../components/home/choose'
import Client from '../components/home/client'
import Contact from '../components/home/contact'
import Services from '../components/home/services'

const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Choose/>
    <Contact/>
    <Services/>
    <Client/>
    </>
  )
}

export default Home