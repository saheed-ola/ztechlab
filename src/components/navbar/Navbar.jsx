// import React from 'react'
// import {Link} from 'react-scroll';
// import { navLinksdata } from '../../constants'
// import { logo } from '../../assets';

// const Navbar = () => {
//   return (
//     <>
//     <div className='bg-[#444444] "w-full sticky top-0 z-50 h-24 mx-auto flex justify-between items-center font-titleFont border-b-[2px] px-8 border-b-gray-600'>
//        <div className='w-[200px] h-[200px] flex items-center justify-center'>
//        <img src= {logo}  />
//        </div>
//        <div>
//        <ul className="flex items-center gap-12">
//           {navLinksdata.map(({_id, title, link}) => (
//             <li  className="text-xl font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
//               key={_id}
//             >
//               <Link
//                 activeclass="active"
//                 to={link}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//        </div>
//     </div>
    
//     </>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { logo } from '../../assets';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#444444] w-full sticky top-0 z-50 h-24 mx-auto flex justify-between items-center font-titleFont border-b-[2px] px-4 sm:px-6 md:px-8 border-b-gray-600'>
      {/* Logo with responsive sizing */}
      <div className='w-[120px] h-[120px] sml:w-[150px] sml:h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center'>
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Desktop Navigation - visible from md (667px) */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-6 lg:gap-8 xl:gap-12">
          {navLinksdata.map(({ _id, title, link }) => (
            <li 
              className="text-base sml:text-lg md:text-xl font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeclass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Icon - visible below md (667px) */}
      <button 
        className="md:hidden text-2xl text-white hover:text-designColor transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)}>
          <div 
            className="absolute right-0 top-24 w-full max-w-xs bg-[#444444] h-[calc(100vh-6rem)] p-6 border-l border-gray-600"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-6">
              {navLinksdata.map(({ _id, title, link }) => (
                <li 
                  className="text-xl font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
                  key={_id}
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    activeclass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;