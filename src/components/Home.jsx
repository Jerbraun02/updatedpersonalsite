import React from 'react'
import Button from './Button'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-primary'>
      <div className='sm:max-w-[600px] lg:max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-text text-xl md:text-2xl'>Hi, my name is</p>
        <h1 className='text-[#ccd6f6] text-4xl sm:text-5xl md:text-5xl font-bold'>
          Jeremy Braunstein
        </h1>
        <h2 className='text-[#8892b0] text-4xl sm:text-5xl md:text-6xl font-bold'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] sm:text-xl md:text-2xl'>
          I'm a frontend developer focused on constructing incredible UI/UX
          experiences with responsive web frameworks.
        </p>
        <div>
          <Link to='about' smooth='true' duration={500}>
            <Button btn='About Me' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
