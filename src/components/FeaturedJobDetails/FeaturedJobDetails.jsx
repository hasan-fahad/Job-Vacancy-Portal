import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobDetails = () => {
    const jobs = useLoaderData()
    const {salary, job_title, job_description, responsibillity, education, experience, phone, email, address} = jobs
    const handleAppliedJob = () =>{
        const storedData = JSON.parse(localStorage.getItem("jobs"));
            if(storedData){
                localStorage.setItem("jobs",JSON.stringify([...storedData,jobs]))
            }else{
                localStorage.setItem("jobs",JSON.stringify([jobs]))
            }
        }
    return (
        <div>
           <div>
                <div className="flex flex-col w-full border-opacity-50">
                   <div className="grid h-[120px] text-5xl font-semibold card bg-base-300 rounded-box place-items-center">Jobs Details</div>
                </div>
           </div>

           <div className='my-16 grid grid-cols-1 sm:grid-cols-2'>
            <div className='w-[auto]'>
                <h1><span  className='text-xl fontbold'>Job Description</span>:  {job_description}</h1>
                <h1 className='my-6'><span className='text-xl fontbold'>Job Responsibility</span>:  {responsibillity}</h1>
                <h1><span className='text-xl fontbold'>Educational Requirements</span>:  {education}</h1>
                <h1><span className='text-xl fontbold'>Experiences:</span> {experience}</h1>
            </div>

            <div className='w-[auto]'>
            <div className="flex flex-col w-full border-opacity-50">
                   <div className="grid h-autu card bg-base-300 rounded-box px-10 py-10 place-items-center">
                    <div>
                        <h1 className='text-2xl font-semibold'>Jobs Details</h1>
                        <p><span >Jobs Details</span>:  {salary}</p>
                        <p><span>Job Title</span>:  {job_title}</p>
                    </div>
                    <div className='my-8'>
                        <h1 className='text-2xl font-semibold'>Contact Information</h1>
                        <p><span>Phone</span>:  {phone}</p>
                        <p><span>Email</span>:  {email}</p>
                        <p><span>Address</span>:  {address}</p>
                    </div>
                    <button onClick={handleAppliedJob} className="btn btn-outline btn-accent w-96">Apply Now</button>
                   </div>
                </div>
            </div>

           </div>
        </div>
    );
};

export default FeaturedJobDetails;