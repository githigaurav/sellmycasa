import React from 'react'

const Services = () => {
  return (
    <>
        <section className='flex justify-center items-center bg-slate-200'>
            {/* <article className='max-w-[1440px] w-full flex justify-center items-center gap-3 py-20 flex-wrap' > */}
            <article className='max-w-[1440px] grid sm:grid-cols-2 gap-2 lg:grid-cols-4 py-10' >
                <div className='max-w-[300px] border p-3 flex w-full flex-col gap-3 items-center text-center shadow-lg bg-white py-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <h3 className='font-bold text-green-700 uppercase '>Our Properties</h3>
                  <p className='max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa magni delectus cumque numquam perferendis, error adipisci earum sit distinctio. </p>
                <a href="" className='text-green-600'>Learn more</a>
                <hr className='w-full max-w-[100px]'/>
                </div>

                <div className='max-w-[300px] border p-3 flex w-full flex-col gap-3 items-center text-center shadow-lg bg-white py-10'>
                <img src="./services/propertyforsale.svg" className="w-20 h-20" alt="" />
                  <h3 className='font-bold text-green-700 uppercase '>Property for Sale</h3>
                  <p className='max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa magni delectus cumque numquam perferendis, error adipisci earum sit distinctio. </p>
                <a href="" className='text-green-600'>Learn more</a>
                <hr className='w-full max-w-[100px]'/>
                </div>

                <div className='max-w-[300px] border p-3 flex w-full flex-col gap-3 items-center text-center shadow-lg bg-white py-10'>
                <img src="./services/agent.svg" className="w-20 h-20" alt="" />
                  <h3 className='font-bold text-green-700 uppercase '>Real State Agent</h3>
                  <p className='max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa magni delectus cumque numquam perferendis, error adipisci earum sit distinctio. </p>
                <a href="" className='text-green-600'>Learn more</a>
                <hr className='w-full max-w-[100px]'/>
                </div>

                <div className='max-w-[300px] border p-3 flex w-full flex-col gap-3 items-center text-center shadow-lg bg-white py-10'>
                <img src="./services/house.svg" className="w-20 h-20" alt="" />
                  <h3 className='font-bold text-green-700 uppercase '>House for Sale</h3>
                  <p className='max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa magni delectus cumque numquam perferendis, error adipisci earum sit distinctio. </p>
                <a href="" className='text-green-600'>Learn more</a>
                <hr className='w-full max-w-[100px]'/>
                </div>
            </article>
            
        </section>
    </>
  )
}

export default Services