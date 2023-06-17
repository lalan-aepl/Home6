import React from 'react'

const WhatWeOfferCard = ({icon,title,msg}) => {
  return (
    <div>
        <div className='flex flex-row  '>
            <div className='text-10 bg-contact p-3 sm:p-4 bg-pink-1 rounded-full w-fit h-fit mx-2 lg:mx-4'> {icon} </div>
            <div>
            <div className='font-sans py-2 text-base font-bold '>{title}</div>
            <div className='  font-sans font-semibold text-sm'>{msg}</div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOfferCard