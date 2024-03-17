import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Arival from './Components/Arivals/Arival'
import Collection from './Components/Collections/Collection'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Arival/>
      <Collection/>
    </div>
  )
}

export default App