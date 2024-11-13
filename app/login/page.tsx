"use client";
import React, { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoIosRefresh } from "react-icons/io";
import { Button } from 'primereact/button';

const LoginPage = () => {
    const [isShown, setIsShown] = useState(false);
    const [isSaving,setIsSaving] = useState(false)
    const [error, setError] = useState('');
    const router = useRouter();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const handleLogin = async (values: { email: string; password: string }) => {
        setIsSaving(true)

        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            router.push('/dashboard');
            setIsSaving(false)
        } catch (err: any) {
            setIsSaving(false)
            setError(err.message);
        }
    };

    return (
        <div className='w-full h-[100vh] flex items-center justify-center px-[20px]'>
            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/3'>
            <div className='flex flex-col items-center'>
                 <a href='./' className='px-[40px] py-[10px] gap-[20px] flex flex-row items-center rounded-[12px] bg-[#FD7E14] text-white'>
                 Home
                 <IoIosRefresh size={20} color='white' />
                 </a>
                <h1 className='text-[40px] text-black'>Admin Sign In</h1>
            </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {({ errors, touched }) => (
                        <Form className='flex flex-col gap-[20px] w-full'>
                            <div className='flex flex-col gap-[10px]'>
                                <label>Email:</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className={`rounded-[12px] border-[1.2px] border-gray-200 p-4 ${errors.email && touched.email ? 'border-red-500' : ''}`}
                                    placeholder='Enter your email'
                                />
                                <ErrorMessage name="email" component="p" className="text-red-500" />
                            </div>
                            <div className='flex flex-col gap-[10px] relative'>
                                <label>Password:</label>
                                <Field
                                    type={isShown ? 'text' : 'password'} // Use isShown to set input type
                                    name="password"
                                    className={`rounded-[12px] border-[1.2px] border-gray-200 p-4 ${errors.password && touched.password ? 'border-red-500' : ''}`}
                                    placeholder='Enter your password'
                                />
                                <div onClick={() => setIsShown(!isShown)} className='cursor-pointer absolute right-[20px] mt-14'>
                                    {isShown ? (
                                        <FaRegEyeSlash size={20} />
                                    ) : (
                                        <FaRegEye size={20} />
                                    )}
                                </div>
                                <ErrorMessage name="password" component="p" className="text-red-500" />
                            </div>
                            {error && <p className='text-red-500'>{error}</p>}
                            <Button loading={isSaving} label='Sign In' className='p-3 text-[20px] bg-[#FD7E14] rounded-[12px] text-white'/>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginPage;
