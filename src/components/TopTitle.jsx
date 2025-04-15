import React from 'react'

const TopTitle = ({heading}) => {
  return (
    <div className="relative flex justify-center flex-col items-center mb-8">
    <div
      variant="2"
      className="text-4xl leading-normal mb-4 text-blue-700 font-bold"
    >
      {heading}
    </div>
    <div className="border-b-4 border-yellow-500 w-[80px] -mt-4"></div>
  </div>
  )
}

export default TopTitle