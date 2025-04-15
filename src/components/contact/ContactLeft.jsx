import React from 'react'
import { contactImg } from '../../assets'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-white p-8 shadow-2xl border-[3px] flex flex-col rounded-2xl gap-8 justify-center'>
            <img className='w-full h-64 object-cover rounded-lg mb-2'
                src= {contactImg} alt="Contact Img" 
                />
                <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-black'>ZTECH LABS</h3>
                <p className='text-lg font-normal text-gray-400'>Software Development Solutions</p>
                <p className='text-base text-gray-400 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique ipsam odio facilis quia ratione perspiciatis dolorum </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone:<span className='text-lightText'>+234 8147284999</span>
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email:{''}<span className='text-lightText'>Ztechlabs@gmail.com</span>
                </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me on</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'> <FaFacebookF/> </span>
                        <span className='bannerIcon'> <FaTwitter/> </span>
                        <span className='bannerIcon'> <FaLinkedin/> </span>
                </div>
            </div>
                
        </div>
  )
}

export default ContactLeft