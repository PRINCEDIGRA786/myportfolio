import React from 'react'

export default function Card({image,content,link}) {
  return (
    <>

    <div className='flex-col flex bg-[#170c19] hover:bg-black group/card overflow-hidden text-white lg:h-40 
     lg:w-80 h-28 w-28 md:h-32 md:w-32 rounded-full phone:flex-row phone:h-16 phone:w-40 phone:rounded-sm lg:rounded-lg space-y-5 p-2 border-[0.2px] border-white'>
    <a href={link} target='_blank' className='phone:flex'>
        <div className=''>
            <img src={image} alt="Loading...."  className='lg:h-16 lg:w-16 h-10 w-10  mx-auto 
            brightness-90 contrast-50 group-hover:brightness-150 group-hover:contrast-100 rounded-full'/>
        </div>
        <div className='space-y-3  text-[#cec6c6] group-hover/card:text-white'>
            <h1 className=' md:text-xs text-[10px] lg:text-md font-medium mt-3  ml-4'>
                {content}
            </h1>
            <h1 className='font-semilbold hidden lg:block group-hover/card:text-blue-600'>
                {link}
            </h1>
        </div>
    </a>
    </div>
      
    </>
  )
}
