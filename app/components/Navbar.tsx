"use client"
import React, { useEffect, useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [activeLink, setActiveLink] = useState('');
    const [isActive, setIsActive] = useState(false)

    let scrollTimeout: string | number | NodeJS.Timeout | null | undefined = null;

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            setShowNavbar(false);

            scrollTimeout = setTimeout(() => {
                setShowNavbar(true);
            }, 200);
        };

        const updateActiveLink = () => {
            const path = window.location.pathname;
            const hash = window.location.hash;
            if (path === '/' && !hash) setActiveLink('./');
            else if (hash === '#services') setActiveLink('./#services');
            else if (path === '/career') setActiveLink('./career');
            else if (path === '/gallery') setActiveLink('./gallery');
            else if (hash === '#contactus') setActiveLink('./#contactus');
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hashchange', updateActiveLink);
        window.addEventListener('popstate', updateActiveLink);

        updateActiveLink();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', updateActiveLink);
            window.removeEventListener('popstate', updateActiveLink);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, []);

    return (
        <div className='px-[10px] md:px-[50px] relative lg:px-[100px] w-full flex justify-center items-center'>
            <div
                className={`fixed top-0 left-1/2 transform -translate-x-1/2 hidden md:flex  w-[95%] max-w-[1200px] p-5 px-4 lg:px-10 bg-[#063F91] rounded-b-[24px]  flex-row gap-[10px] justify-between items-center z-40 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className='px-10 cursor-pointer flex flex-row text-[16px] text-black bg-white py-2 rounded-[12px]'>LOGO</div>
                <div className='flex flex-row gap-[10px] md:gap-[20px] lg:gap-[40px] items-center'>
                    <a href="./" className={`text-[16px] ${activeLink === './' ? 'text-[#FD7E14]' : 'text-white'}`}>Home</a>
                    <a href="./#services" className={`text-[16px] ${activeLink === './#services' ? 'text-[#FD7E14]' : 'text-white'}`}>Services</a>
                    <a href="./career" className={`text-[16px] ${activeLink === './career' ? 'text-[#FD7E14]' : 'text-white'}`}>Job Opening / Career</a>
                    <a href="./gallery" className={`text-[16px] ${activeLink === './gallery' ? 'text-[#FD7E14]' : 'text-white'}`}>Gallery</a>
                </div>
                <a href="./#contactus" className={`p-3 px-10 rounded-[12px] bg-[#FD7E14] text-white`}>
                    Contact Us
                </a>
            </div>
            <div
                className={`fixed border border-[white]/20 border-t-0 top-0 left-1/2 transform -translate-x-1/2 flex md:hidden  w-[95%] max-w-[1200px] p-5 px-4 lg:px-10 bg-[#063F91] rounded-b-[24px]  flex-col gap-[10px] justify-between items-center z-40 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className='flex flex-row gap-[10px] justify-between w-full items-center '>
                    <div className='px-10 cursor-pointer flex flex-row text-[16px] text-white bg-[#FD7E14] py-2 rounded-[12px]'>LOGO</div>
                    <div onClick={() => setIsActive(!isActive)} className=' cursor-pointer '>
                        {isActive ? (
                            <IoCloseOutline size={30} color='white' />
                        ) : (

                            <CiMenuFries size={30} color='white' />
                        )}
                    </div>
                </div>
                <div className={`${isActive ? "h-[36vh] " : "h-[0px]"} transition-all duration-300  overflow-hidden flex  flex-col gap-[10px] md:gap-[20px] lg:gap-[40px] items-center mt-4`}>
                    <a href="./" className={`text-[20px] ${activeLink === './' ? 'text-[#FD7E14]' : 'text-white'}`}>Home</a>
                    <a href="./#services" onClick={() => setIsActive(false)} className={`text-[20px] ${activeLink === './#services' ? 'text-[#FD7E14]' : 'text-white'}`}>Services</a>
                    <a href="./career" className={`text-[20px] ${activeLink === './career' ? 'text-[#FD7E14]' : 'text-white'}`}>Job Opening / Career</a>
                    <a href="./gallery" className={`text-[20px] ${activeLink === './gallery' ? 'text-[#FD7E14]' : 'text-white'}`}>Gallery</a>
                    <a href="./#contactus" onClick={() => setIsActive(false)} className={`p-3 px-10 rounded-[12px] bg-[#FD7E14] text-white`}>
                        Contact Us
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
