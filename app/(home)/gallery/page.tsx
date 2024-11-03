"use client"
import Navbar from '@/app/components/Navbar'
import React from 'react'
import ImageContainer from '@/app/components/ImageContainer'
import Footer from '@/app/components/Footer'

const Gallery = () => {
    // Array of image paths with width and height
    const images = [
        {
            src: '/image/about1.png',
            width: 1200, // Actual width of the image
            height: 800, // Actual height of the image
            alt: "sds"
        },
        {
            src: '/image/about2.png',
            width: 800,
            height: 1200,
            alt: "sds"
        },
        {
            src: '/image/about1.png',
            width: 1200, // Actual width of the image
            height: 800, // Actual height of the image
            alt: "sds"
        },
        {
            src: '/image/about2.png',
            width: 800,
            height: 1200,
            alt: "sds"
        },
        {
            src: '/image/about1.png',
            width: 1200, // Actual width of the image
            height: 800, // Actual height of the image
            alt: "sds"
        },
        {
            src: '/image/about2.png',
            width: 800,
            height: 1200,
            alt: "sds"
        },
        // Add more images as needed
    ];

    return (
        <>
            <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] flex flex-col justify-center py-24'>
                <Navbar />
                <section className="px-[40px] my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {images.map((photo, index) => (
                        <ImageContainer key={index} photo={photo} />
                    ))}
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Gallery;
