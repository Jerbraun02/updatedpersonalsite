import React from 'react'

const SkillsHolder = (props) => {
  return (
    <div className='shadow-md shadow-[#404556] hover:shadow-text duration-700 rounded-xl p-6 grid grid-cols-2'>
      <div className='p-5'>
        <img
          src={props.img}
          alt='html'
          className='w-28 hover:scale-110 duration-500 lg:w-36'
        />
        <p className='pt-3 sm:max-w-[200px] lg:max-w-[500px] lg:text-2xl'>
          {props.txt}
        </p>
      </div>
      <div>
        <p className='lg:text-lg'>{props.jobtxt}</p>
      </div>
    </div>
  )
}

export default SkillsHolder
