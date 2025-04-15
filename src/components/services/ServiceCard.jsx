import React from 'react'

const ServiceCard = ({title, des, src}) => {
  return (
<div className='w-[400px]  px-12 h-auto py-10 rounded-lg border shadow-2xl shadow-cyan-800 flex flex-col hover:from-white translation-colors duration-1000' data-aos="zoom-in-up">
    <div className='w-full h-[80%] overflow-hidden rounded-2xl'>
        <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt="" />
    </div>
    <div className='w-full mt-5 flex flex-col gap-2'>
        <div className='items-center'>
            <h3 className='text-base uppercase font-bold text-black' >{title}</h3>
            {/* <div className='flex gap-2'>
                <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-cursor-pointer'><BsGithub/></span>
                <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-cursor-pointer'><FaGlobe/>
                </span>
            </div> */}
        </div>  
        <p className='text-sm tracking-wide'> {des}</p>
    </div> 
</div>
  )
}

export default ServiceCard