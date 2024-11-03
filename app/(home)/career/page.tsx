import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const Career = () => {
    return (
        <>
        <div className='flex flex-col gap-[10px] px-[10px] md:px-[50px] lg:px-[100px] py-24'>
            <Navbar />
            <div className='w-full flex flex-col gap-[20px] items-center justify-center py-4'>
                <h1 className='text-[#063F91] text-[32px] font-[900] leading-8 max-w-[600px] text-center'>Join Us in Shaping the Future – Your Next Career Adventure Starts Here!</h1>
                {/* <span className='border-b-[2px] pb-1 border-[#063F91]/60'>Career / Job openning</span> */}
            </div>
            <div className='w-full flex flex-col md:flex-row gap-[20px] py-10 '>
                <div className='w-full md:w-[40%] flex flex-col gap-[10px] py-4'>
                    <h1 className='text-[20px] uppercase font-[400]'>Opeening job</h1>
                    <div className='p-2 bg-[#063F91] px-4 rounded-[12px] flex flex-row gap-[10px] items-center justify-between'>
                        <span className='text-[14px] text-white max-w-[200px] leading-5 font-[400]'>Adult Family Home Live-In Care Manager</span>
                        <div className='text-[20px] text-yellow-500 font-[700] cursor-pointer'>--</div>
                    </div>
                    <div className='p-2 bg-[#063F91] px-4 rounded-[12px] flex flex-row gap-[10px] items-center justify-between'>
                        <span className='text-[14px] text-white max-w-[200px] leading-5 font-[400]'>Adult Family Home Live-In Care Manager</span>
                        <div className='text-[20px] text-yellow-500 font-[700] cursor-pointer'>--</div>
                    </div>
                    <div className='p-2 bg-[#063F91] px-4 rounded-[12px] flex flex-row gap-[10px] items-center justify-between'>
                        <span className='text-[14px] text-white max-w-[200px] leading-5 font-[400]'>Adult Family Home Live-In Care Manager</span>
                        <div className='text-[20px] text-yellow-500 font-[700] cursor-pointer'>--</div>
                    </div>
               
                </div>

                <form action="" className='w-full md:w-[60%] flex flex-col gap-[10px]'>
                    <div className='grid grid-cols-2 gap-[10px]'>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[16px] font-[400] text-[#535353]'>Full Name</span>
                            <input type="text" className='w-full p-4 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter your  full name' />
                        </div>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[16px] font-[400] text-[#535353]'>Email </span>
                            <input type="email" className='w-full p-4 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter  your email' />
                        </div>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[16px] font-[400] text-[#535353]'>Phone Number </span>
                            <input type="number" className='w-full p-4 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter  your phone number' />
                        </div>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[16px] font-[400] text-[#535353]'>Position Apllying for</span>
                            <input type="text" className='w-full p-4 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter  your phone number' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[3px] w-full'>
                        <span className='text-[16px] font-[400] text-[#535353]'>Message</span>
                        <textarea rows={4} className='w-full p-4 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter  your email'></textarea>
                    </div>
                    <button className='w-full md:w-1/2 p-4 rounded-[12px] bg-[#063F91] text-white text-[16px] font-[600]'>Submit Message</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Career