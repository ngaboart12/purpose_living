import React from 'react'

const GetInTouch = () => {
    return (
        <div id='contactus' className='w-full flex flex-col lg:flex-row items-center gap-[20px] py-20 px-[10px] md:px-[50px] lg:px-[100px]'>
            <div className='w-full md:w-[40%] bg-[#063F91] p-10 rounded-[20px] flex flex-col gap-[10px]'>
                <div className='flex flex-row gap-[20px] items-center'>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 12.9911C20.0963 13.4366 17.2789 13.8464 15.5492 15.2006C13.5164 16.7865 13.035 19.691 12.5 25.5C11.9472 19.4772 11.4479 16.5905 9.21897 15.0403C7.4893 13.8286 4.68973 13.4366 0 13.0089C4.88588 12.5634 7.72111 12.1536 9.43295 10.8172C11.4836 9.21347 11.965 6.3268 12.5 0.5C12.9993 5.86351 13.4451 8.73236 15.1034 10.3895C16.7618 12.0467 19.6505 12.51 25 12.9911Z" fill="#FD7E14" />
                    </svg>

                    <span className='text-[20px] text-[#FD7E14]'>Get in Touch with Us</span>
                </div>
                <h1 className='text-[18px] font-[700] text-white leading-6'>We’re here to answer <br />
                    your questions and help you learn more about Purposeful Living Home.
                </h1>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex flex-row gap-[10px] items-center'>
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23914 9.39128C1.25354 5.15069 4.7029 1.7247 8.94348 1.73906C13.1841 1.75351 16.6101 5.20287 16.5957 9.44345V9.53041C16.5435 12.2869 15.0044 14.8348 13.1174 16.8261C12.0382 17.9467 10.8331 18.9388 9.52609 19.7826C9.1766 20.0849 8.6582 20.0849 8.3087 19.7826C6.3602 18.5143 4.65007 16.9131 3.25653 15.0521C2.01449 13.4294 1.3093 11.4597 1.23914 9.41737V9.39128Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.91741 11.9999C10.2765 11.9999 11.3783 10.8981 11.3783 9.53899C11.3783 8.17989 10.2765 7.07812 8.91741 7.07812C7.55831 7.07812 6.45654 8.17989 6.45654 9.53899C6.45654 10.8981 7.55831 11.9999 8.91741 11.9999Z" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className='flex flex-col'>
                            <h1 className='text-[16px] font-[800] text-white'>address</h1>
                            <span className='text-[14px] font-[400] text-white'>Location</span>
                        </div>

                    </div>
                    <div className='flex flex-row gap-[10px] items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2677 8.56104L13.0023 11.9953C12.1951 12.6282 11.0635 12.6282 10.2563 11.9953L5.95422 8.56104" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className='flex flex-col'>
                            <h1 className='text-[16px] font-[800] text-white'>Email</h1>
                            <span className='text-[14px] font-[400] text-white'>example123@gmail.com</span>
                        </div>

                    </div>
                    <div className='flex flex-row gap-[10px] items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04253 8.48441 11.0315 12.4724Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className='flex flex-col'>
                            <h1 className='text-[16px] font-[800] text-white'>Phone Number</h1>
                            <span className='text-[14px] font-[400] text-white'>0782***2</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full md:w-[60%] flex flex-col gap-[20px]'>
                <h1 className='text-[24px] font-[800] text-[#063F91] '>Send Us A Message</h1>
                <form action="" className='w-full flex flex-col gap-[10px]'>
                    <div className='grid grid-cols-2 gap-[10px]'>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[14px] font-[400] text-[#535353]'>Full Name</span>
                            <input type="text" className='w-full p-3 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter your  full name' />
                        </div>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[14px] font-[400] text-[#535353]'>Email </span>
                            <input type="email" className='w-full p-3 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter  your email' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[3px] w-full'>
                        <span className='text-[14px] font-[400] text-[#535353]'>Message</span>
                        <textarea rows={4} className='w-full p-3 px-4 bg-[#FAFAFA] rounded-[12px]' placeholder='Enter  your email'></textarea>
                    </div>
                    <button className='w-full md:w-1/2 p-3 rounded-[12px] bg-[#063F91] text-white text-[16px] font-[600]'>Submit Message</button>
                </form>
            </div>
        </div>
    )
}

export default GetInTouch