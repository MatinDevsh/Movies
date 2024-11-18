import React, { useState } from 'react'


export default function nav() {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  return (
  <>
    <div className='flex items-center justify-between p-4 ' >
      <div className='flex'>

        <div className='flex'>
          <div className=' text-4xl md:mr-5 lg:mr-8'>
            logo
          </div>
          <ul className='hidden items-center md:flex lg:text-base xl:text-lg md:text-sm md:gap-3 lg:gap-8 xl:gap-10  ml-auto'>
            <li><a className='hover:text-gray-500 trans' href="#">Movies</a></li>
            <li><a className='hover:text-gray-500 trans' href="#">TvShow</a></li>
            <li><a className='hover:text-gray-500 trans' href="#">People</a></li>
            <li><a className='hover:text-gray-500 trans' href="#">More</a></li>
          </ul>
        </div>
      </div>

      <div className=' hover:text-gray-500 trans md:hidden ml-auto '>
        <button onClick={() => setisOpenMenu(!isOpenMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
      </div>



      <div>
        <ul className='hidden md:flex md:gap-3 md:text-sm lg:text-base xl:text-lg lg:gap-8 xl:gap-10 '>
          <li><a href="#" className='hover:text-gray-500 trans'>Login</a></li>
          <li><a href="#" className='bg-red-600 trans  hover:bg-red-700 hover:text-gray-200 px-4 py-2 rounded-lg'>SingUp</a></li>
        </ul>
      </div>
    </div>
    <div className={`${isOpenMenu ? 'trans h-[184px] md:hidden text-center text-slate-300 border-t-2 border-b-2 border-slate-600 pt-2  pb-4' :'trans overflow-hidden	text-center h-[0px]'}`}>
      <ul> 
        <li className='p-[3px]'><a className=' hover:text-gray-500 trans' href="#">TvShow</a></li>
        <li className='p-[3px]'><a className=' hover:text-gray-500 trans' href="#">People</a></li>
        <li className='p-[3px]'><a className=' hover:text-gray-500 trans' href="#">More</a></li>
        <li className='p-[3px]'><a className=' hover:text-gray-500 trans' href="#">Movies</a></li>
      </ul>
      <ul className='flex text-center justify-center gap-3 mt-3'>
          <li><a href="#" className='hover:text-gray-500 trans'>Login</a></li>
          <li><a href="#" className='bg-red-600 trans text-sm  hover:bg-red-700 hover:text-gray-200 px-3 py-[6px] rounded-lg'>SingUp</a></li>
        </ul>
    </div>
    </>
  )
}