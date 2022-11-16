import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import Li from './Li'
import LiTop from './LiTop'
import SideBar from './SideBar'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const handleClick = () => setMenu(!menu)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-[#fff]'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '200px' }} />
      </div>

      <ul className='hidden md:flex'>
        <LiTop />
      </ul>

      <div
        onClick={handleClick}
        className='md:hidden z-10 text-xl cursor-pointer'
      >
        {!menu ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !menu
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'
        }
      >
        <Li close={handleClick} />
      </ul>

      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <SideBar />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
