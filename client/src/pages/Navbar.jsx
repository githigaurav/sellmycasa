import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false)
    const navBtn=[
        <button className='text-white'>Home</button>,
        <button className='text-white'>Service</button>,
        <button className='text-white'>Contact</button>,
        <button className='text-white'>About</button>,
    ]
  return (
    <>
        <nav className='absolute top-0 z-50 flex w-full justify-center '>
           <div className='flex w-full max-w-[1440px]  justify-between py-3 px-3 relative '>
                <h1 className=' uppercase font-bold text-3xl text-green-400'>SellMyCasa</h1>
                <div className='gap-10 md:gap-20 font-thin text-xl hidden sm:flex'>
                    {navBtn?.map((btn, index)=> btn)}
                </div>
                <div className='sm:hidden' onClick={()=>{setIsOpen((prev)=> !prev)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
                </div>
                {/* mobile navbar */}
                <div className={`absolute sm:hidden  py-10  bg-black bg-opacity-90  w-full left-0 ${isOpen ? "top-full" : "-top-[1000px]"}  flex flex-col gap-5 font-thin text-xl transition-all ease-in-out duration-300 -z-10`}>
                    {navBtn?.map((btn, index)=> btn)}
                 
                </div>  
           </div>
        </nav>
    </>
  )
}

export default Navbar