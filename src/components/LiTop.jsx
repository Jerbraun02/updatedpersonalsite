import React from 'react'
import { Link } from 'react-scroll'

const LiTop = () => {
  return (
    <>
      <li className='py-8 text-xl'>
        <Link to='home' smooth='true' duration={500}>
          Home
        </Link>
      </li>
      <li className='py-8 text-xl'>
        <Link to='about' smooth='true' duration={500}>
          About
        </Link>
      </li>
      <li className='py-8 text-xl'>
        <Link to='skills' smooth='true' duration={500}>
          Skills
        </Link>
      </li>
      <li className='py-8 text-xl'>
        <Link to='work' smooth='true' duration={500}>
          Work
        </Link>
      </li>
      <li className='py-8 text-xl'>
        <Link to='contact' smooth='true' duration={500}>
          Contact
        </Link>
      </li>
    </>
  )
}

export default LiTop
