import Image from 'next/image'
import React from 'react'

const OurFacility = () => {
  return (
    <div className='w-full py-20 flex flex-col gap-[20px] items-center px-[10px] md:px-[50px] lg:px-[100px]'>
        <h1 className='text-[18px] text-black font-[600]'>Our Facility</h1>
        <span className='text-[400x] text-black text-[16px] text-center max-w-[600px]'>Designed with comfort and safety in mind, our facility features spacious living areas, well-appointed private and shared rooms, and inviting common spaces for social interaction and activities.</span>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] w-full'>
            <div className='w-full h-[40vh]'>
                <Image src={`/image/facility1.png`} width={1000} height={1000} className='w-full h-full object-cover rounded-[12px]' alt='' />
            </div>
            <div className='w-full h-[40vh]'>
                <Image src={`/image/facility2.png`} width={1000} height={1000} className='w-full h-full object-cover rounded-[12px]' alt='' />
            </div>
            <div className='w-full h-[40vh]'>
                <Image src={`/image/facility3.png`} width={1000} height={1000} className='w-full h-full object-cover rounded-[12px]' alt='' />
            </div>
        </div>
    </div>
  )
}

export default OurFacility