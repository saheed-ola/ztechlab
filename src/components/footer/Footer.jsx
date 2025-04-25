// import React from 'react'
// import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
// import { logo } from '../../assets'
// // import { logo } from '../../assets/index'

// const Footer = () => {
//   return (
//     <div className='w-[100%] mx-auto py-20 h-auto text-white-700 bg-[#9b9b9b] overflow-hidden p-8 border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 '>
//         <div className='w-full h-full flex flex-col gap-8'>
//             <img className='w-32 scale-150' src={logo} alt="logo" />
//             <div>
//                 <span className='bannerIcon'><FaFacebookF/></span>
//                 <span className = 'bannerIcon' ><FaTwitter/></span>
//                 <span className = 'bannerIcon'><FaLinkedin/></span>
//             </div>
//         </div>
//         <div className='w-full h-full'>
//             <h3 className='text-xl uppercase text-designColor tracking-wider' data-aos="fade-down">
//                 Quick Link  
//             </h3>
//             <ul className='flex flex-col gap-4 font-titleFont font-medium py-4 overflow-hidden' data-aos="fade-up">
//                 <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>About <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li>  
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Portfolio<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Services<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Blog<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li>  
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Contact<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li>             
//             </ul>
//         </div>
//         <div className='w-full h-full'>
//         <h3 className='text-xl uppercase text-designColor tracking-wider' data-aos="fade-down">
//                 resources  
//             </h3>
//             <ul className='flex flex-col gap-4 font-titleFont font-medium py-4 overflow-hidden' data-aos="fade-up">
//                 <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>System status<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Terms of Service<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Pricing<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Over Right<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li>               
//             </ul>
//         </div>
//         <div className='w-full h-full'>
//         <h3 className='text-xl uppercase text-designColor tracking-wider' data-aos="fade-down">
//                 developers  
//             </h3>
//             <ul className='flex flex-col gap-4 font-titleFont font-medium py-4 overflow-hidden' data-aos="fade-up">
//                 <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Documentation<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>API Reference<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Support<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li> 
//               <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Open Source<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
//                 </span>
//               </li>               
//             </ul>
//         </div>
//         <div className='w-full h-full'></div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { logo } from '../../assets'

const Footer = () => {
  return (
    <div className='w-full mx-auto py-10 md:py-20 bg-[#9b9b9b] p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-between'>
      {/* Logo & Social Section */}
      <div className='w-full h-full flex flex-col gap-6 md:gap-8 sm:col-span-2 lg:col-span-1'>
        <img 
          className='w-24 md:w-32 mx-auto sm:mx-0' 
          src={logo} 
          alt="logo" 
        />
        <div className='flex gap-4 justify-center sm:justify-start'>
          <span className='bannerIcon'><FaFacebookF/></span>
          <span className='bannerIcon'><FaTwitter/></span>
          <span className='bannerIcon'><FaLinkedin/></span>
        </div>
      </div>

      {/* Quick Links */}
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h3 className='text-lg sm:text-xl md:text-2xl uppercase text-designColor tracking-wider'>
          Quick Link  
        </h3>
        <ul className='flex flex-col gap-3 sm:gap-4 font-medium py-4 overflow-hidden'>
          {['About', 'Portfolio', 'Services', 'Blog', 'Contact'].map((item) => (
            <li key={item}>
              <span className='w-full text-base sm:text-lg relative hover:text-designColor duration-300 cursor-pointer group'>
                {item}
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300'/>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      {/* <div className='w-full h-full'>
        <h3 className='text-lg sm:text-xl md:text-2xl uppercase text-designColor tracking-wider'>
          Resources  
        </h3>
        <ul className='flex flex-col gap-3 sm:gap-4 font-medium py-4 overflow-hidden'>
          {['Authentication', 'System status', 'Terms of Service', 'Pricing'].map((item) => (
            <li key={item}>
              <span className='w-full text-base sm:text-lg relative hover:text-designColor duration-300 cursor-pointer group'>
                {item}
                <span className='absolute h-[1px] w-full  hover:inline-flex  bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300'/>
              </span>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Developers */}
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h3 className='text-lg sm:text-xl md:text-2xl uppercase text-designColor tracking-wider'>
          Developers  
        </h3>
        <ul className='flex flex-col gap-3 sm:gap-4 font-medium py-4 overflow-hidden'>
          {['Documentation', 'Authentication', 'API Reference', 'Support', 'Open Source'].map((item) => (
            <li key={item}>
              <span className='w-full text-base sm:text-lg relative hover:text-designColor duration-300 cursor-pointer group'>
                {item}
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300'/>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer