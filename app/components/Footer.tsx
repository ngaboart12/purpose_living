import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  pt-10 bg-[#063F91] flex flex-col gap-[20px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] px-[10px] md:px-[50px] lg:px-[100px]'>
        <div className='w-full  flex flex-col gap-[10px]'>
          <div className='px-2 cursor-pointer w-[120px] flex flex-row items-center justify-center text-[16px] text-black bg-white py-2 rounded-[12px]'>LOGO</div>
          <span className='text-[14px text-white font-[300] leading-5'>We focus on guiding you through a personalized healthcare journey, ensuring your unique needs are met at every step. Our compassionate team is dedicated to providing care that enhances your well-being and quality of life.</span>

        </div>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-white text-[16px] font-[500]'>Useful links</h1>
          <div className='grid grid-cols-2 gap-[10px]'>
            <a href="" className='text-white hover:opacity-60'>Home</a>
            <a href="" className='text-white hover:opacity-60'>Job opening / career</a>
            <a href="" className='text-white hover:opacity-60'>Services</a>
            <a href="" className='text-white hover:opacity-60'>Gallery</a>
            <a href="" className='text-white hover:opacity-60'>About Us</a>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-white text-[16px] font-[500]'>Contact Us</h1>
          <div className='flex flex-col gap-[10px]'>
            <div className='flex flex-row gap-[5px] items-center'>
              <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23914 10.3913C4.25354 6.15069 7.7029 2.7247 11.9435 2.73906C16.1841 2.75351 19.6101 6.20287 19.5957 10.4435V10.5304C19.5435 13.2869 18.0044 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.3602 19.5143 7.65007 17.9131 6.25653 16.0521C5.01449 14.4294 4.3093 12.4597 4.23914 10.4174V10.3913Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.9174 12.9999C13.2765 12.9999 14.3783 11.8981 14.3783 10.539C14.3783 9.17989 13.2765 8.07812 11.9174 8.07812C10.5583 8.07812 9.45654 9.17989 9.45654 10.539C9.45654 11.8981 10.5583 12.9999 11.9174 12.9999Z" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </div>
              <span className='text-white '>Kigali, kicukiro</span>
            </div>
            <div className='flex flex-row gap-[5px] items-center'>
              <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2677 8.56104L13.0023 11.9953C12.1951 12.6282 11.0635 12.6282 10.2563 11.9953L5.95422 8.56104" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </div>
              <span className='text-white '>ngaboart123@gmail.com</span>
            </div>
            <div className='flex flex-row gap-[5px] items-center'>
              <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297" stroke="#00AAA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04253 8.48441 11.0315 12.4724Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </div>
              <span className='text-white '>0782********</span>
            </div>

          </div>
        </div>
      </div>
      <div className='w-full p-4 flex flex-row  gap-[4px] text-white items-center justify-center bg-[#0D4CA7]'>
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  )
}

export default Footer