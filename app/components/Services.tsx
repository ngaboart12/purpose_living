import { title } from 'process'
import React from 'react'

type Service = {
    id: number,
    title: string,
    description: string,
}

const Services = () => {
    const services:Service[] = [
        {
            id: 1,
            title: "Personalized Care Plans",
            description: "Individual assessments to develop tailored care plans focusing on health, mobility, and personal preferences."
        },
        {
            id: 2,
            title: "24/7 Care and Support",
            description: "Our trained staff is available around the clock to assist with daily living activities, medication management, and health monitoring."
        },
        {
            id: 3,
             title: "Nutritious Meals",
            description: "A balanced menu created by our nutritionists, accommodating dietary restrictions and personal preferences to promote health and wellness."
        },
        {
            id: 4,
            title: "Social Activities and Programs",
            description: "Engaging activities designed to promote socialization and mental stimulation, including arts and crafts, games, and outings that align with residents’ interests."
        },
        {
            id: 5,
            title: "Transportation Services",
            description: "Convenient transportation for medical appointments, social events, and community outings."
        },
        {
            id: 6,
            title: "Personalized Care Plans",
            description: "Open communication and support for families, including regular updates on residents’ well-being and care."
        },
    ]
    return (
        <div id='services' className='w-full px-[20px] md:px-[50px] lg:px-[100px] bg-[#063F91] flex flex-col gap-[20px] py-10 items-center justify-center'>
            <span className='px-[40px] py-[10px] rounded-[6px] font-[600] bg-[#1550A6] uppercase text-white text-[16px]'>services</span>
            <h1 className=' uppercase text-[24px] leading-8 text-white font-[800] text-center max-w-[700px]'>At Purposeful Living Home, we offer a comprehensive range of services tailored to meet the unique needs of our residents:</h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] w-full'>
                {services.map((service:Service, index:number)=>{
                    return (
                        <div className=' w-full flex flex-col gap-[5px] py-[40px] px-[20px] rounded-[12px] bg-[#1550A6]' key={index}>
                            <div className=' w-[30px] py-[10px] bg-white'></div>
                            <h1 className='text-white text-[16px] font-[600]'>{service.title}</h1>
                            <span className='text-[14px] foont-[400] text-[#ECECEC]'>{service.description}</span>

                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default Services