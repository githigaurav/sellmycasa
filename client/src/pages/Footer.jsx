import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-grayPro flex py-10 w-full justify-around'>
        <section className=' w-full max-w-[1400px] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 grid-rows-2 h-fit'>
            <section className='flex flex-col gap-3'>
                <h3 className='font-bold text-xl uppercase'>Contact</h3>
                <span>+91 721739 6015</span>
                <span>info@higaurav.com</span>
            </section>
            <section className='flex flex-col gap-3 items-start'>
                <h3 className='font-bold text-xl uppercase'>Sources</h3>
                <button>About us</button>
                <button>Services</button>
                <button>Vision</button>
                <button>Mission</button>
                <button>Terms</button>
                <button>Privacy</button>
            </section>
            <section className='flex flex-col gap-3 items-start'>
                <h3 className='font-bold text-xl uppercase'>Link</h3>
                <button>Our vision</button>
                <button>Contact us</button>
                <button>About us</button>
            </section>
            <section className='w-full text-center  h-fit col-span-full'>
                <h3>Copyright@higaurav.com</h3>
            </section>
        </section>
   
    </footer>
  )
}

export default Footer