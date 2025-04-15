import React from 'react'
import {Link} from 'react-scroll';
import { navLinksdata } from '../../constants'
import { logo } from '../../assets';

const Navbar = () => {
  return (
    <>
    <div className='bg-[#444444] "w-full sticky top-0 z-50 h-24 mx-auto flex justify-between items-center font-titleFont border-b-[2px] px-8 border-b-gray-600'>
       <div className='w-[200px] h-[200px] flex items-center justify-center'>
       <img src= {logo}  />
       </div>
       <div>
       <ul className="flex items-center gap-12">
          {navLinksdata.map(({_id, title, link}) => (
            <li  className="text-xl font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
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
    </div>
    
    </>
  )
}

export default Navbar