import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import OurFacility from '../components/OurFacility'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='flex flex-col text-black'>
            <div className='flex flex-col gap-[10px] px-[10px] md:px-[50px] lg:px-[100px]'>
                <Navbar />
                <div className='py-10 pt-40 w-full flex flex-col lg:flex-row gap-[40px] items-center'>
                    <div className='w-full  lg:w-1/2'>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex flex-row gap-[30px] items-center justify-center lg:justify-start'>
                                <div className='w-[40px] h-[6px] bg-[#0A6EFF]'></div>
                                <h1 className=' text-[18px] font-[700] text-black'>Purposeful Living Home</h1>
                            </div>
                            <h1 className='text-[48px] font-[800] text-black leading-[50px] text-center lg:text-start'>Your Path to <span className='text-[#FD7E14]'>Better Health</span> Starts Here</h1>
                            <span className='text-[16px] max-w-[450px] text-center lg:text-start'>We focus on guiding you through a personalized healthcare journey, ensuring your unique needs are met at every step. Our compassionate team is dedicated to providing care that enhances your well-being and quality of life.</span>
                        </div>
                    </div>
                    <div className='w-full px-10  lg:w-1/2'>
                        <div className='flex-row w-full gap-[20px]  grid grid-cols-2'>
                            <div className='flex flex-col gap-[20px] pb-10'>
                                <div className='h-[40vh] rounded-[12px] bg-[lightgray]'>
                                    <Image src={`/image/doctor.png`} width={1000} height={1000} alt='Doctor' className='w-full h-full object-cover rounded-[12px]' />
                                </div>
                                <div className='p-2 ml-auto w-[80%] rounded-[12px] bg-[#FAFAFA] flex flex-row gap-[4px]'>
                                    <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="47" height="45" rx="12" fill="#FD7E14" />
                                        <path d="M34.0417 24.3766H31.2838C30.5161 24.3766 30.1323 24.3766 29.7925 24.528C29.4526 24.6793 29.1957 24.9648 28.6819 25.5355L27.4812 26.8698C27.0597 27.338 26.849 27.5722 26.5817 27.5665C26.3144 27.5607 26.1141 27.318 25.7136 26.8324L21.5973 21.843C21.2239 21.3903 21.0371 21.164 20.7837 21.1487C20.5303 21.1335 20.3178 21.3359 19.8928 21.7406L18.1388 23.4111C17.6382 23.8878 17.3879 24.1263 17.075 24.2515C16.762 24.3766 16.4164 24.3766 15.725 24.3766H13.0417" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M23.5417 16.794L22.9112 17.4008C23.0762 17.5722 23.3038 17.669 23.5417 17.669C23.7795 17.669 24.0072 17.5722 24.1721 17.4008L23.5417 16.794ZM12.6411 26.0058C12.8965 26.416 13.4361 26.5415 13.8464 26.2861C14.2566 26.0308 14.3821 25.4911 14.1267 25.0809L12.6411 26.0058ZM17.1596 28.7771C16.8175 28.4358 16.2635 28.4364 15.9222 28.7786C15.5809 29.1207 15.5816 29.6747 15.9237 30.016L17.1596 28.7771ZM12.75 21.0366C12.75 17.7665 14.2168 15.7376 16.0507 15.04C17.8897 14.3404 20.4515 14.8452 22.9112 17.4008L24.1721 16.1872C21.382 13.2885 18.1105 12.3841 15.4286 13.4043C12.7417 14.4263 11 17.2458 11 21.0366H12.75ZM27.628 33.1265C29.369 31.754 31.456 29.9138 33.1154 27.8578C34.7564 25.8247 36.0833 23.4537 36.0833 21.0365H34.3333C34.3333 22.846 33.3156 24.8234 31.7537 26.7586C30.2103 28.6708 28.2362 30.4186 26.5447 31.7522L27.628 33.1265ZM36.0833 21.0365C36.0833 17.2458 34.3416 14.4263 31.6548 13.4043C28.9728 12.3841 25.7013 13.2885 22.9112 16.1872L24.1721 17.4008C26.6318 14.8452 29.1936 14.3404 31.0326 15.04C32.8666 15.7376 34.3333 17.7665 34.3333 21.0365H36.0833ZM19.4553 33.1264C20.942 34.2985 21.9668 35.1519 23.5417 35.1519V33.4019C22.6892 33.4019 22.16 33.0303 20.5387 31.7522L19.4553 33.1264ZM26.5447 31.7522C24.9233 33.0303 24.3941 33.4019 23.5417 33.4019V35.1519C25.1165 35.1519 26.1413 34.2985 27.628 33.1265L26.5447 31.7522ZM14.1267 25.0809C13.2564 23.683 12.75 22.3131 12.75 21.0366H11C11 22.7632 11.6773 24.4577 12.6411 26.0058L14.1267 25.0809ZM20.5387 31.7522C19.4689 30.9088 18.2811 29.8958 17.1596 28.7771L15.9237 30.016C17.1057 31.1952 18.3479 32.2534 19.4553 33.1264L20.5387 31.7522Z" fill="white" />
                                    </svg>
                                    <span className='text-[13px] font-[600]'>Your Health, Our Mission</span>

                                </div>
                            </div>
                            <div className='flex flex-col-reverse gap-[20px] pt-10'>
                                <div className='h-[40vh] rounded-[12px] bg-[lightgray]'>
                                    <Image src={`/image/nurse.png`} width={1000} height={1000} alt='Doctor' className='w-full h-full object-cover rounded-[12px]' />
                                </div>
                                <div className='p-2 ml-auto w-full  rounded-[12px] bg-[#063F91] flex flex-row gap-[10px]'>
                                    <div className='flex flex-row items-center'>
                                        <div className='w-[30px]  h-[30px] bg-white rounded-full'></div>
                                        <div className='w-[30px] ml-[-10px] h-[30px] bg-[orange] rounded-full'></div>
                                        <div className='w-[30px] ml-[-10px] h-[30px] bg-[violet] rounded-full'></div>
                                    </div>
                                    <span className='text-[13px] text-white font-[500] left-5 '>Trusted by the <br /> Community</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <WhyChooseUs />

            </div>
            <Services />
            <AboutUs />

            <div className='w-full bg-[#F5F5F5] py-20 px-[10px] md:px-[50px] lg:px-[100px]'>
                <div className='w-full flex flex-col lg:flex-row items-center gap-[20px]'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-[10px] text-center lg:text-start'>
                        <h1 className='text-[#FD7E14] text-[18px] font-[600]'>Our Team</h1>
                        <h1 className='text-[20px] uppercase text-[#063F91] font-[700]'>We believe in person-centered care that honors the individuality of each resident. </h1>
                        <span className='text-[16px]'>Our experienced staff takes the time to know each resident’s preferences, routines, and interests, ensuring that everyone feels at home and has the opportunity to engage in purposeful activities</span>
                    </div>
                    <div className='flex-row w-full lg:w-1/2 gap-[20px]  grid grid-cols-2'>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='h-[60vh] rounded-[12px] bg-[lightgray]'>
                                <Image src={`/image/team1.png`} width={1000} height={1000} alt='Doctor' className='w-full h-full object-cover rounded-[12px]' />
                            </div>
                            <div className='py-8 ml-auto w-[100px] rounded-bl-[50px] bg-[#063F91] '></div>
                        </div>
                        <div className='flex flex-col-reverse gap-[20px]'>
                            <div className='h-[60vh] rounded-[12px] bg-[lightgray]'>
                                <Image src={`/image/team2.png`} width={1000} height={1000} alt='Doctor' className='w-full h-full object-cover rounded-[12px]' />
                            </div>
                            <div className='py-8 mr-auto w-[100px] rounded-tr-[50px] bg-[#FD7E14] '></div>
                        </div>
                    </div>

                </div>
            </div>
            <OurFacility />
            <GetInTouch />
            <Footer/>
        </div>
    )
}

export default Home