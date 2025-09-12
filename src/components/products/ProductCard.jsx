import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ title, des, src, link, children }) => {
  return (
    <div>
         <Link to={`/services/${link}`}>
          <div className="w-full h-full flex flex-col max-w-[95%] xs:max-w-[400px] mx-auto px-4 xs:px-6 sml:px-8 md:px-10 py-6 md:py-8 lg:py-10 rounded-lg border shadow-lg sml:shadow-xl md:shadow-2xl shadow-cyan-800/50 hover:shadow-cyan-800 transition-all duration-300">
            {/* Image Container */}
            {/* <div className="w-full h-[160px] xs:h-[180px] sml:h-[200px] md:h-[220px] overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src={src}
                alt={title}
              />
            </div> */}
            {children ? (
            children
          ) : (
            <div className="w-full h-[160px] xs:h-[180px] sml:h-[200px] md:h-[220px] overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src={src}
                alt={title}
              />
            </div>
          )}

            {/* Text Container with flex-grow */}
            <div className="flex flex-col gap-2 mt-4 flex-grow">
              <h3 className="text-sm xs:text-base md:text-lg font-bold text-black uppercase tracking-wide line-clamp-2">
                {title}
              </h3>
              <p className="text-xs xs:text-sm sml:text-base text-gray-600 tracking-normal leading-relaxed whitespace-normal break-words">
                {des}
              </p>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default ProductCard