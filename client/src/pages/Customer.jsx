import React from 'react'

const Customer = () => {
    const data=[
        {
            image:"https://img.freepik.com/free-photo/african-american-man-wearing-round-glasses_273609-10062.jpg",
            rating:"***",
            name:"James Smith",
            review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint recusandae nobis impedit nihil velit, laboriosam sunt ab ullam fugit reprehenderit iure necessitatibus dolore asperiores earum nostrum maxime totam officia debitis!"
        },
        {
            image:"https://img.freepik.com/free-photo/african-american-man-wearing-round-glasses_273609-10062.jpg",
            rating:"***",
            name:"James Smith",
            review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint recusandae nobis impedit nihil velit, laboriosam sunt ab ullam fugit reprehenderit iure necessitatibus dolore asperiores earum nostrum maxime totam officia debitis!"
        },
        {
            image:"https://img.freepik.com/free-photo/african-american-man-wearing-round-glasses_273609-10062.jpg",
            rating:"***",
            name:"James Smith",
            review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint recusandae nobis impedit nihil velit, laboriosam sunt ab ullam fugit reprehenderit iure necessitatibus dolore asperiores earum nostrum maxime totam officia debitis!"
        },
    ]
  return (
   <section className='w-full flex justify-center items-center  py-10 bg-white'>
        <section className='w-full max-w-[1400px] flex gap-2 justify-around'>
            {
                data?.map((person, index)=>{
                    const{image, rating, name, review}=person
                    return <div key={index} className='max-w-[400px] flex flex-col gap-2 p-4'>
                            <section className='overflow-hidden rounded-full w-fit'>
                                <img src={image} alt="" className="w-[100px] h-[100px] max-w-[100px]  rounded-full max-h-[100px] object-cover object-center hover:scale-150 hover:translate-y-5 transition-all" />
                            </section>
                            <section className='flex flex-col'>
                                <span className='text-orange-400 text-4xl p-0 m-0 h-5'>{rating}</span>
                                <h3 className='font-bold text-2xl'>{name}</h3>
                                <p className='text-slate-600'>{review}</p>
                            </section>

                            </div>
                })
            }
        </section>
   </section>
  )
}

export default Customer