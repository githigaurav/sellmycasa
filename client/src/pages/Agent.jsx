import React from 'react'

const Agent = () => {
  const data=[
    {
        image:"https://img.freepik.com/free-photo/african-american-man-wearing-round-glasses_273609-10062.jpg",
        role:"Real Estate Agent",
        name:"James Smith",
        review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint recusandae nobis impedit nihil velit, laboriosam sunt ab ullam fugit reprehenderit iure necessitatibus dolore asperiores earum nostrum maxime totam officia debitis!"
    },
    {
        image:"https://img.freepik.com/free-photo/african-american-man-wearing-round-glasses_273609-10062.jpg",
        role:"Real Estate Agent",
        name:"James Smith",
        review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint recusandae nobis impedit nihil velit, laboriosam sunt ab ullam fugit reprehenderit iure necessitatibus dolore asperiores earum nostrum maxime totam officia debitis!"
    },
    {
        image:"https://img.freepik.com/free-photo/african-american-man-wearing-round-glasses_273609-10062.jpg",
        role:"Real Estate Agent",
        name:"James Smith",
        review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint recusandae nobis impedit nihil velit, laboriosam sunt ab ullam fugit reprehenderit iure necessitatibus dolore asperiores earum nostrum maxime totam officia debitis!"
    },
]
  return (
    <>
      <section className='grid place-items-center py-10'>
         <section className='w-full flex  max-w-[1400px] flex-col gap-5'>
              <section className='flex flex-col gap-3 items-center justify-center'>
                  <h3 className='text-5xl font-bold'>Our Agents</h3>
                  <p className='text-xl text-slate-600 max-w-[600px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis adipisci </p>
                </section>
                <section className='flex gap-2 mt-20'>
                  {
                    data?.map((person, index)=>{
                      const{image, role, name, review}=person
                      return <div className='max-w-[400px] max-h-fit  items-center justify-center '>
                              <section className='relative'>
                                  <img src={image} alt="" className='absolute -top-10 translate-x-full w-20 h-20 rounded-full object-cover' />
                              </section>
                              <section className='w-full text-center mt-20 '>
                                <span className='text-slate-600'>{role}</span>
                                <h3 className='text-2xl font-bold'>{name}</h3>
                                <p className='text-slate-600'>{review}</p>
                              </section>
                      </div>
                    })
                  }
                </section>
         </section>
      </section>
    </>
  )
}

export default Agent