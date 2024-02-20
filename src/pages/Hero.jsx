import React from 'react'
const Hero = () => {
  return (
    <>
        <main className='w-full h-dvh relative flex items-center justify-center'>
            <div className='bg-cover w-full h-dvh bg-no-repeat  ' style={{backgroundImage: `url(homeHero.jpg)`}} >
              <div className='w-full h-dvh bg-black opacity-70'>
              </div>
            </div>
            {/* hero action area */}
            <div className='absolute top-0 w-full h-dvh flex justify-center items-center flex-col  max-w-[1440px] gap-5'>
                <h3 className='text-white uppercase text-5xl font-bold max-w-[500px]   lg:max-w-fit p-3  text-center'>Easist way to find your dream home</h3>
                <div className='flex  w-full gap-5 justify-center flex-col px-2 items-center lg:flex-row '>
                    <input type="text" placeholder='Your City name .....' className='py-3 px-10  rounded-full w-full max-w-[600px] ' />
                    <button className='bg-green-600 px-10 py-3 rounded-full w-full text-white max-w-[200px] '>Search</button>
                </div>
            </div>
        </main>
    </>
  )
}

export default Hero