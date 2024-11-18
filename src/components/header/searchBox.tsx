import React from 'react'

export default function searchBox() {
  return (
    <div className=' container mt-6 flex relative items-center'>
     
     <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-3 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
     

      <input  placeholder='Search for a movies... ' type="text" className= ' placeholder:text-slate-300 p-2  text-sm w-full placeholder:search text-xl bg-slate-500 text-slate-200 p-1 rounded-lg border-slate-900 border-' />
    </div>
  )
}
