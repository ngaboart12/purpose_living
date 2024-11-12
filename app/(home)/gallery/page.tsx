"use client";
import Navbar from '@/app/components/Navbar';
import React, { useEffect, useState } from 'react';
import Footer from '@/app/components/Footer';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebase'; 
import Image from 'next/image';
import Masonry from 'react-masonry-css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for modal image

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            const imagesCollection = collection(db, "gallery");
            const imagesSnapshot = await getDocs(imagesCollection);
            const imagesList = imagesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setImages(imagesList as any);
            setIsLoading(false);
        };

        fetchImages();
    }, []);

    // Breakpoint columns configuration for responsive design
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    // Function to open modal
    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    // Function to close modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] flex flex-col justify-center py-24'>
                <Navbar />
                <div className='py-10 w-full flex items-center justify-center'>
                    <h1 className='p-2 px-10 bg-[#063F91] text-white text-[16px] font-[400] rounded-[6px]'>Gallery</h1>
                </div>
                <section className="px-[40px] my-3">
                    {isLoading ? (
                        <div className='w-full h-full flex items-center justify-center'>
                            <h1 className='text-[24px] font-[500]'>Loading...</h1>
                        </div>
                    ) : (
                        <>
                            {images.length == 0 && (
                                <div className='w-full h-full flex items-center justify-center'>
                                    <h1 className='text-[24px] font-[500]'>No Photo Available</h1>
                                </div>
                            )}
                        </>
                    )}
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {images.map((photo: any) => (
                            <div 
                                key={photo.id} 
                                className="w-full cursor-pointer hover:opacity-90 hover:scale-90 duration-300 transition-all"
                                onClick={() => openModal(photo.imageUrl)} // Open modal on click
                            >
                                <Image
                                    src={photo.imageUrl}
                                    alt=''
                                    width={500}
                                    height={500}
                                    className='w-full h-auto rounded-lg border'
                                />
                            </div>
                        ))}
                    </Masonry>
                    
                    {/* Modal for displaying the selected image */}
                    {selectedImage && (
                        <div className="fixed inset-0 px-4 flex items-center justify-center bg-black bg-opacity-75 z-50">
                            <div className="relative w-full md:w-1/2 h-[70vh] rounded-lg bg-white overflow-hidden">
                                <button 
                                    onClick={closeModal} 
                                    className="absolute top-0 right-0 mt-4 mr-4 text-red-400 text-2xl font-bold"
                                >
                                    &times;
                                </button>
                                <Image
                                    src={selectedImage}
                                    alt="Selected"
                                    width={800}
                                    height={800}
                                    className="rounded-lg w-ful h-full object-cover"
                                />
                            </div>
                        </div>
                    )}
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Gallery;
