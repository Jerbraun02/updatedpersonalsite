import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SideBar = () => {
  return (
    <>
      <li className='w-[160px] h-[60px] justify-between items-center ml-[-85px] hover:ml-[0px] duration-500 bg-[#111212]'>
        <a
          className='flex justify-between items-center w-full py-3'
          href='https://github.com/Jerbraun02'
        >
          Github <FaGithub size={35} />
        </a>
      </li>
      <li className='w-[160px] h-[60px] items-center ml-[-85px] hover:ml-[0px] duration-500 bg-[#000]'>
        <a
          className='flex justify-between items-center w-full py-3'
          href='https://www.linkedin.com/in/jeremy-braunstein-ba392018a/'
        >
          LinkedIn <FaLinkedin size={35} />
        </a>
      </li>
      <li className='w-[160px] h-[60px] items-center ml-[-85px] hover:ml-[0px] duration-500 bg-text'>
        <a
          className='flex justify-between items-center w-full py-3'
          href='mailto:jeremybraunstein1@gmail.com'
        >
          Email <HiOutlineMail size={35} />
        </a>
      </li>
    </>
  )
}

export default SideBar
