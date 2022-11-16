import React from 'react'
import { Link } from 'react-scroll'

const Li = (props) => {
  return (
    <>
      <>
        <li className='py-8 text-4xl'>
          <Link onClick={props.close} to='home' smooth='true' duration={500}>
            Home
          </Link>
        </li>
        <li className='py-8 text-4xl'>
          <Link onClick={props.close} to='about' smooth='true' duration={500}>
            About
          </Link>
        </li>
        <li className='py-8 text-4xl'>
          <Link onClick={props.close} to='skills' smooth='true' duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-8 text-4xl'>
          <Link onClick={props.close} to='work' smooth='true' duration={500}>
            Work
          </Link>
        </li>
        <li className='py-8 text-4xl'>
          <Link
            onClick={props.handleClick}
            to='contact'
            smooth='true'
            duration={500}
          >
            Contact
          </Link>
        </li>
      </>
    </>
  )
}

export default Li
