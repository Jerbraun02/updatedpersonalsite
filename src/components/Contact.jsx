import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div name='contact' className='bg-primary w-full h-screen'>
      <div className='max-w-[600px] lg:max-w-[900px] xl:max-w-[1150px] h-full mx-auto flex flex-col justify-center duration-300'>
        <div className='flex flex-col'>
          <div>
            <p className='text-4xl text-[#fff] font-semibold border-b-4 border-text inline'>
              Contact
            </p>
            <p className='text-[#fff] py-4 text-xl'>
              Send me a message to work together on any projects!
            </p>
          </div>
        </div>
        <form
          method='POST'
          action={process.env.REACT_APP_URL}
          className='flex flex-col mx-auto w-full py-5 pr-5'
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
  )
}

export default Contact
