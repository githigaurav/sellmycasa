import React from 'react'

const Section = () => {
  return (
   <>
        <section className='grid place-items-center py-10 px-5 bg-slate-200'>
            <article className='flex flex-col gap-3'>
                <h3 className='font-bold text-xl md:text-2xl'>Be a part of our growing real state agents</h3>
                <button className='bg-greenPro text-white py-2 rounded-full hover:bg-green-600 transition-all'>Apply for Real Estate agent</button>
            </article>
        </section>
   </>
  )
}

export default Section