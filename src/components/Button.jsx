import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Button = (props) => {
  return (
    <button className='text-[#fff] border-2 px-6 py-3 my-2 flex items-center hover:bg-text hover:border-text duration-500 max-w-[200px]'>
      {props.btn}
      <span className='pl-2'>
        <HiArrowNarrowRight />
      </span>
    </button>
  )
}

export default Button
