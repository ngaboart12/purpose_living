"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import withAuth from "../../lib/withAuth";
import { IoMdLogOut } from "react-icons/io";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Formik, Form, Field } from "formik";
import { CiCircleRemove } from "react-icons/ci";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import "primereact/resources/themes/lara-light-blue/theme.css";
import Image from "next/image";

// Cloudinary upload function
const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "all-cleaning");

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
    });

    const data = await res.json();
    return data.secure_url;
};

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
    const [jobs, setJobs] = useState<any[]>([]);
    const [galleryImages, setGalleryImages] = useState<any[]>([]);
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const router = useRouter();
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/login");
        } catch (error: any) {
            console.error("Logout error:", error.message);
        }
    };

    const fetchJobs = async () => {
        const jobsCollection = collection(db, "opened-job");
        const jobsSnapshot = await getDocs(jobsCollection);
        const jobsData = jobsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setJobs(jobsData);
    };

    const fetchGalleryImages = async () => {
        const galleryCollection = collection(db, "gallery");
        const gallerySnapshot = await getDocs(galleryCollection);
        const galleryData = gallerySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setGalleryImages(galleryData);
    };

    useEffect(() => {
        fetchJobs();
        fetchGalleryImages(); 
    }, []);

    const handleAddJob = async (values: { title: string; description: string }) => {
        setIsSaving(true);
        try {
            const docRef = await addDoc(collection(db, "opened-job"), values);
            console.log("Document written with ID: ", docRef.id);
            fetchJobs();
            setIsOpen(false);
        } catch (e) {
            console.error("Error adding document: ", e);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteJob = async (jobId: string) => {
        try {
            await deleteDoc(doc(db, "opened-job", jobId));
            fetchJobs();
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

    const handleUpdateJob = async (jobId: string, values: { title: string; description: string }) => {
        try {
            await updateDoc(doc(db, "opened-job", jobId), values);
            fetchJobs();
            setIsUpdateOpen(false);
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    };

    const handleEditJob = (job: any) => {
        setSelectedJob(job);
        setIsUpdateOpen(true);
    };

    // Handle image upload to Cloudinary and Firestore
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                const imageUrl = await uploadToCloudinary(file);
                await addDoc(collection(db, "gallery"), { imageUrl }); // Store URL in Firestore gallery collection
                fetchGalleryImages(); // Refresh the gallery images list
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    };

    // Handle image deletion from Firestore
    const handleDeleteImage = async (imageId: string) => {
        try {
            await deleteDoc(doc(db, "gallery", imageId));
            fetchGalleryImages(); // Refresh the gallery images list after deletion
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    return (
        <div className="w-full bg-gray-50 min-h-[100vh] text-black flex flex-col p-2 md:p-10">
            <div className="w-full flex flex-col">
                <div className="w-full p-4 px-8 bg-white rounded-[12px] flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-[20px] items-center">
                        <div className="px-[40px] py-[10px] bg-[#FD7E14] text-white rounded-[12px]">
                            <span>Logo</span>
                        </div>
                        <h1 className="text-[16px] font-[900]">Dashboard</h1>
                    </div>
                    <div onClick={handleLogout} className="cursor-pointer hover:opacity-80 transition-all">
                        <IoMdLogOut size={30} className="text-red-500" />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full flex flex-col gap-[10px] lg:w-1/2 p-4">
                    <div className="w-full flex flex-row bg-white p-4 items-center justify-between">
                        <h1 className="text-[18px] font-[600]">Opened Jobs</h1>
                        <Button onClick={() => setIsOpen(true)} label="Add New Job" className="px-4 py-3 bg-[#063F91] text-white rounded-[12px]" />
                    </div>
                    <div className="w-full flex flex-col bg-white p-4">
                        {jobs.map((job) => (
                            <div key={job.id} className="flex justify-between items-center p-4 border-b">
                                <div className="w-full">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <h2 className="text-[16px] font-[600]">{job.title}</h2>
                                        <div className="flex gap-[10px]">
                                            <Button label="Edit" onClick={() => handleEditJob(job)} className="p-2 text-blaue-400 rounded-[12px]" />
                                            <Button label="Delete" onClick={() => handleDeleteJob(job.id)} className="p-2 px-4 bg-red-500 text-white rounded-[12px]" />
                                        </div>
                                    </div>
                                    <p className="text-[14px]">{job.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-5">
                    {/* Image upload section */}
                    <div className="w-full p-4 bg-white">
                        <h2 className="text-[18px] font-[600]">Upload Images</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="p-2 border rounded-[12px] mb-4"
                        />
                        <h3 className="text-[16px] font-[600]">Gallery</h3>
                        <div className="flex flex-wrap gap-[10px]">
                            {galleryImages.length === 0 ? (
                                <div>
                                    <h1>No Images available</h1>
                                </div>
                            ) : (
                                <>
                                    {galleryImages.map((image) => (
                                        <div key={image.id} className="relative">
                                            <Image
                                                src={image.imageUrl}
                                                alt="Gallery Image"
                                                width={1000}
                                                height={1000}
                                                className="w-[100px] h-[100px] object-cover rounded-[12px]"
                                            />
                                       
                                            <div  onClick={() => handleDeleteImage(image.id)}>
                                            <CiCircleRemove className="absolute top-2 right-0 cursor-pointer text-red-500 font-[800] p-1 rounded-[8px]" size={40} />
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Dialog header="Add New Job" visible={isOpen} className="w-[90%] md:w-1/2" modal onHide={() => setIsOpen(false)}>
                <Formik
                    initialValues={{ title: "", description: "" }}
                    onSubmit={handleAddJob}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-[10px] items-center">
                            <div className="w-full">
                                <label className="text-[14px] font-[600]">Title</label>
                                <Field type="text" name="title" className="w-full border p-3 rounded-[12px]" placeholder="Add job title" />
                            </div>
                            <div className="w-full">
                                <label className="text-[14px] font-[600]">Description</label>
                                <Field as="textarea" name="description" rows={4} className="w-full border p-3 rounded-[12px]" placeholder="Add job description" />
                            </div>
                            <Button type="submit" label="Add Job" loading={isSubmitting || isSaving} className="p-3 bg-[#063F91] rounded-[12px] text-white w-full md:w-1/2" />
                        </Form>
                    )}
                </Formik>
            </Dialog>

            {/* Update Job Dialog */}
            {selectedJob && (
                <Dialog header="Update Job" visible={isUpdateOpen} className="w-[90%] md:w-1/2" modal onHide={() => setIsUpdateOpen(false)}>
                    <Formik
                        initialValues={{
                            title: selectedJob.title,
                            description: selectedJob.description,
                        }}
                        onSubmit={(values) => handleUpdateJob(selectedJob.id, values)}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col gap-[10px] items-center">
                                <div className="w-full">
                                    <label className="text-[14px] font-[600]">Title</label>
                                    <Field type="text" name="title" className="w-full border p-3 rounded-[12px]" placeholder="Update job title" />
                                </div>
                                <div className="w-full">
                                    <label className="text-[14px] font-[600]">Description</label>
                                    <Field as="textarea" name="description" rows={4} className="w-full border p-3 rounded-[12px]" placeholder="Update job description" />
                                </div>
                                <Button type="submit" label="Update Job" loading={isSubmitting} className="p-3 bg-[#063F91] rounded-[12px] text-white w-full md:w-1/2" />
                            </Form>
                        )}
                    </Formik>
                </Dialog>
            )}
        </div>
    );
};

export default withAuth(Dashboard);
