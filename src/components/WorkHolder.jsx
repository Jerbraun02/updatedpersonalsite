import React from 'react'

const SkillsHolder = (props) => {
  return (
    <div className='shadow-md shadow-[#404556] hover:shadow-text duration-700 rounded-xl p-6 grid grid-cols-2'>
      <div className='p-5'>
        <img
          src={props.img}
          alt='html'
          className='sm:w-10 lg:w-20 hover:scale-110 duration-500'
        />
        <p className='pt-3 sm:max-w-[200px] lg:max-w-[500px] sm:text-sm lg:text-sm'>
          {props.txt}
        </p>
      </div>
      <div>
        <p className='text-sm'>{props.jobtxt}</p>
      </div>
    </div>
  )
}

export default SkillsHolder
