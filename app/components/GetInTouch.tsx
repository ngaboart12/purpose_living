"use client"
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Toast } from 'primereact/toast';
import { Button } from "primereact/button"
import { toast } from 'react-toastify';


const GetInTouch = () => {
    const [error, setError] = useState('');
    const [isSaving, setIsSaving] = useState<boolean>(false)


    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Full name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Message is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setIsSaving(true)
            setError('');
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    console.log(response)
                }
                setIsSaving(false)
                toast.success("Message Sent")
                resetForm();
            } catch (err: any) {
                toast.error("Somthing get wrong")
                setError(err.message);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div id='contactus' className='w-full flex flex-col lg:flex-row items-center gap-[20px] py-20 px-[10px] md:px-[50px] lg:px-[100px]'>
            <div className='w-full md:w-[40%] bg-[#063F91] p-10 rounded-[20px] flex flex-col gap-[10px]'>
                <div className='flex flex-row gap-[20px] items-center'>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 12.9911C20.0963 13.4366 17.2789 13.8464 15.5492 15.2006C13.5164 16.7865 13.035 19.691 12.5 25.5C11.9472 19.4772 11.4479 16.5905 9.21897 15.0403C7.4893 13.8286 4.68973 13.4366 0 13.0089C4.88588 12.5634 7.72111 12.1536 9.43295 10.8172C11.4836 9.21347 11.965 6.3268 12.5 0.5C12.9993 5.86351 13.4451 8.73236 15.1034 10.3895C16.7618 12.0467 19.6505 12.51 25 12.9911Z" fill="#FD7E14" />
                    </svg>
                    <span className='text-[20px] text-[#FD7E14]'>Get in Touch with Us</span>
                </div>
                <h1 className='text-[18px] font-[700] text-white leading-6'>
                    We’re here to answer your questions and help you learn more about Purposeful Living Home.
                </h1>
            </div>
            <div className='w-full md:w-[60%] flex flex-col gap-[20px]'>
                <h1 className='text-[24px] font-[800] text-[#063F91] '>Send Us A Message</h1>
                {error && <div className='text-red-500'>{error}</div>}  {/* Display error message */}
                <form onSubmit={formik.handleSubmit} className='w-full flex flex-col gap-[10px]'>
                    <div className='grid grid-cols-2 gap-[10px]'>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[14px] font-[400] text-[#535353]'>Full Name</span>
                            <input
                                type="text"
                                name="fullName"
                                className='w-full p-3 px-4 bg-[#FAFAFA] rounded-[12px]'
                                placeholder='Enter your full name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                            />
                            {formik.touched.fullName && formik.errors.fullName ? (
                                <div className='text-red-500'>{formik.errors.fullName}</div>
                            ) : null}
                        </div>
                        <div className='flex flex-col gap-[3px]'>
                            <span className='text-[14px] font-[400] text-[#535353]'>Email</span>
                            <input
                                type="email"
                                name="email"
                                className='w-full p-3 px-4 bg-[#FAFAFA] rounded-[12px]'
                                placeholder='Enter your email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-500'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='flex flex-col gap-[3px] w-full'>
                        <span className='text-[14px] font-[400] text-[#535353]'>Message</span>
                        <textarea
                            name="message"
                            rows={4}
                            className='w-full p-3 px-4 bg-[#FAFAFA] rounded-[12px]'
                            placeholder='Enter your message'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        ></textarea>
                        {formik.touched.message && formik.errors.message ? (
                            <div className='text-red-500'>{formik.errors.message}</div>
                        ) : null}
                    </div>
                    <Button label='Submit Message' loading={isSaving} className='p-3 bg-[#063F91] rounded-[12px] text-white w-full md:w-1/2' />
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;
