import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-primary text-[#fff]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='sm:max-w-[600px] lg:max-w-[1000px] w-full grid grid-cols-2 gap-6'>
          <div className='pb-8 pl-4'>
            <p className='font-semibold inline border-b-4 border-text sm:text-4xl lg:text-6xl'>
              About
            </p>
          </div>
          <div></div>
          <div className='max-w-[600px] w-full grid  gap-8'>
            <div>
              <p className='sm:text-4xl lg:text-6xl font-semibold'>
                Hi. I'm Jeremy, nice to meet you. Welcome to my site!
              </p>
            </div>
          </div>
          <div>
            <p className='sm:text-2xl lg:text-5xl font-thin'>
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
