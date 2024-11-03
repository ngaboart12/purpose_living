import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full py-10 items-center gap-[20px]'>
            <div className='w-full  lg:w-1/2 py-10 flex items-center  relative'>
                <div className='bg-[#063F91]/10 p-4 w-1/2  md:w-1/3 h-full absolute z-10 rounded-[12px]'></div>
                <div className='px-6 w-full lg:pr-40 '>
                    <div className='h-[60vh] relative w-full z-20 rounded-[12px] bg-[lightgray]'>
                        <Image src={`/image/whchoose.png`} width={1000} height={1000} alt='Doctor' className='w-full h-full object-cover rounded-[12px]' />
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-[10px]'>
                <div className='p-2 px-4 bg-[#E5EFFD] mx-auto sm:mx-0 sm:mr-auto'>
                    <span className='text-[#063F91] font-[600]'>WHY CHOOSE US</span>
                </div>
                <h1 className='uppercase text-[20px] font-[700] text-[#063F91] text-center sm:text-start'>Join our community today and experience the difference that purposeful care can make!</h1>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-[10px]'>
                    <div className='p-4 flex gap-[20px] flex-row rounded-[12px] bg-[#FAFAFA]'>
                        <div className='w-[10px] h-full bg-[#063F91]'></div>
                        <span className='text-[16px] font-[500]'>Personalized care plans tailored to individual needs</span>
                    </div>
                    <div className='p-4 flex gap-[20px] flex-row rounded-[12px] '>
                        <div className='w-[10px] h-full bg-[#063F91]'></div>
                        <span className='text-[14px] font-[500]'>Engaging activities and social programs to enrich lives</span>
                    </div>
                    <div className='p-4 flex gap-[20px] flex-row rounded-[12px] '>
                        <div className='w-[10px] h-full bg-[#063F91]'></div>
                        <span className='text-[16px] font-[500]'>A safe, comfortable, and homelike environment</span>
                    </div>
                    <div className='p-4 flex gap-[20px] flex-row rounded-[12px] bg-[#FAFAFA]'>
                        <div className='w-[10px] h-full bg-[#063F91]'></div>
                        <span className='text-[16px] font-[500]'>Compassionate, trained staff available 24/7</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs