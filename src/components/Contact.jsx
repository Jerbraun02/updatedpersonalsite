import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div name='contact' className='bg-primary h-screen'>
      <div className='sm:max-w-[600px] lg:max-w-[1000px] h-full mx-auto flex flex-col justify-center duration-500'>
        <div className='pl-10'>
          <div>
            <p className='text-4xl text-[#fff] font-semibold border-b-4 border-text inline'>
              Contact
            </p>
            <p className='text-[#fff] py-4 sm:text-md'>
              Shoot me a message to see how we can collaborate:
            </p>
          </div>
          <div className=''>
            <form
              method='POST'
              action={process.env.REACT_APP_URL}
              className='flex flex-col mx-auto py-5 pr-5'
            >
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='text-[#000] border-2 px-4 py-3 mb-2'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='text-[#000] border-2 px-4 py-3 my-2'
                required
              />
              <textarea
                placeholder='Message'
                name='message'
                className='text-[#000] border-2 px-4 py-3 my-2'
                rows='10'
                required
              ></textarea>
              <Button type='submit' btn='Send Message' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
