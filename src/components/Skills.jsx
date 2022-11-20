import React from 'react'
import CSS from '../assets/css.png'
import AWS from '../assets/aws.png'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/reactjs.png'
import GITHUB from '../assets/github.png'
import TAILWIND from '../assets/tailwind.png'
import NODE from '../assets/node.png'
import SkillsHolder from './SkillsHolder'

const Skills = () => {
  return (
    <div name='skills' className='bg-primary w-full h-screen'>
      <div className='sm:max-w-[600px] lg:max-w-[800px] h-full mx-auto flex flex-col justify-center'>
        <div className='pl-10 flex flex-col'>
          <div>
            <p className='text-4xl text-[#fff] font-semibold border-b-4 border-text inline'>
              Skills
            </p>
            <p className='text-[#fff] py-4 text-lg'>
              These are the technologies I've worked with:
            </p>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 text-center text-[#fff]'>
          <SkillsHolder img={HTML} txt='HTML' />
          <SkillsHolder img={CSS} txt='CSS' />
          <SkillsHolder img={REACT} txt='React Js' />
          <SkillsHolder img={JS} txt='Javascript' />
          <SkillsHolder img={AWS} txt='AWS' />
          <SkillsHolder img={GITHUB} txt='Github' />
          <SkillsHolder img={NODE} txt='NodeJS' />
          <SkillsHolder img={TAILWIND} txt='TailwindCSS' />
        </div>
      </div>
    </div>
  )
}

export default Skills
