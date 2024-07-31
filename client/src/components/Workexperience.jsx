import React from 'react'

export default function Workexperience({company,course,time,position}) {
  return (
    <>
    <div className=' h-32 align-middle pt-10 shadow-xl shadow-purple-900 font-semibold max-h-40 w-[800px] flex justify-around bg-gradient-to-br from-[rgb(9,9,121)] via-[rgb(144,6,161)] to-[rgb(0,212,255)] rounded-2xl p-2 text-2xl text-yellow-400'>
        <h1 className='text-white' >{company}</h1>
        <h1>{course}</h1>
        <h1 className='flex-col flex'>{time}
            <span className='text-white text-lg'>{position}</span>
        </h1>

    </div>
      
    </>
  )
}
