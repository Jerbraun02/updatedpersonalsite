import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen bg-primary text-[#fff]'>
      <div className='pl-8 flex flex-col justify-center h-full'>
        <div className='grid grid-cols-2 gap-6 px-5 sm:max-w-[600px] lg:max-w-[800px] mx-auto duration-500'>
          <div className='pb-4'>
            <p className='font-semibold inline border-b-4 border-text text-4xl '>
              About
            </p>
          </div>
          <div />
          <div>
            <p className='sm:text-xl lg:text-3xl font-semibold'>
              Hi. I'm Jeremy, nice to meet you. Welcome to my site!
            </p>
          </div>
          <div>
            <p className='sm:text-xl lg:text-2xl font-thin'>
              I'm a frontend developer(soon to be fullstack B"H) living in New
              York. I pride myself on my ability to create beautiful &
              functional websites. Please scroll down and check out some of my
              work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
