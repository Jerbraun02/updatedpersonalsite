import React from 'react'

const SkillsHolder = (props) => {
  return (
    <div className='shadow-md shadow-[#404556] hover:shadow-text duration-700 rounded-xl p-6'>
      <img
        src={props.img}
        alt='html'
        className='w-28 mx-auto hover:scale-110 duration-500'
      />
      <p>{props.txt}</p>
    </div>
  )
}

export default SkillsHolder
