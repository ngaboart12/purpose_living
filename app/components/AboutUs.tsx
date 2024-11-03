import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row items-center py-32 px-[10px] md:px-[50px] lg:px-[100px]'>
            <div className='w-full lg:w-1/2 flex flex-row relative items-center'>
                <div className='w-[80%] pr-10'>
                    <Image src={`/image/about1.png`} width={1000} height={1000} className='w-full rounded-[12px]' alt=';' />
                </div>
                <div className='w-[30%] h-[70%]  absolute right-[70px]'>
                    <Image src={`/image/about2.png`} width={1000} height={1000} className='w-full h-full object-cover rounded-[12px]' alt=';' />
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-[10px] py-4 lg:py-0'>
                <div className='flex flex-col gap-[10px] text-center lg:text-start'>
                    <h1 className='uppercase text-[18px] text-[#063F91] font-[700]'>About Purposeful Living Home</h1>
                    <span className='text-[16px]'>At Purposeful Living Home, we understand that choosing the right adult care home is a significant decision. Our mission is to foster a home-like atmosphere where residents feel valued, respected, and cared for.</span>
                </div>
                <div className='flex flex-col gap-[10px] text-center lg:text-start'>
                    <h1 className='uppercase text-[18px] text-[#063F91] font-[700]'>Our Philosophy</h1>
                    <span className='text-[16px]'>We believe in person-centered care that honors the individuality of each resident. Our experienced staff takes the time to know each resident’s preferences, routines, and interests, ensuring that everyone feels at home and has the opportunity to engage in purposeful activities</span>
                </div>
            </div>
        </div>
    )
}

export default AboutUs