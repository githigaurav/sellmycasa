import React from 'react'

const Feature = () => {
    const data=[
        {
            image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price:"$12,000",
            location:"5232, California lake, Ave, 12BC",
            city:"Dehradun",

        },
        {
            image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price:"$12,000",
            location:"5232, California lake, Ave, 12BC",
            city:"Dehradun",

        },
        {
            image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price:"$12,000",
            location:"5232, California lake, Ave, 12BC",
            city:"Dehradun",

        },
        {
            image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price:"$12,000",
            location:"5232, California lake, Ave, 12BC",
            city:"Dehradun",

        },
        
    ]
  return (
    <section className='flex items-center justify-center py-10 flex-col'>
        <section className='flex justify-between w-full max-w-[1400px] py-10 items-center'>
            <h3 className='text-2xl font-bold text-green-600 uppercase'>Popular properties</h3>
            <button className='bg-green-700 text-white py-2 px-4 rounded-full'>View All Properties</button>
        </section>
        <section className='flex max-w-[1400px] gap-3  justify-around w-full'>
            {
                data?.map((property, index)=>{
                    const {image,price, location, city }=property
                    return <div className='bg-slate-200 max-w-[400px]  rounded-lg py-6 px-4'>
                                <section className=' '>
                                    <img src={image} alt="img" className='rounded-lg' />
                                </section>
                                <section className='flex flex-col gap-2 ml-2 mt-2'>
                                    <span className='text-green-600 text-xl'>{price}</span>
                                    <span className='text-slate-600'>{location}</span>
                                    <h2 className='text-2xl uppercase font-bold'>{city}</h2>
                                    <button className='bg-green-600 py-2 text-white rounded-full w-fit px-10'>See Details</button>
                                </section>
                         </div>
                })
            }
        </section>
            <section className='w-full max-w-[1400px] '>
                <hr className='mt-5 mb-5' />
                <section className='flex justify-between'>
                    <button className='bg-green-700 py-2 px-5 text-white rounded-full'>Prev</button>
                    <p className='text-slate-600'>slides...</p>
                    <button className='bg-green-700 py-2 px-5 text-white rounded-full'>Next</button>
                </section>
            </section>
    </section>
  )
}

export default Feature