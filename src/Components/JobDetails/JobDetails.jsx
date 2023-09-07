import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {jobId}=useParams();
    const loadedJobsFeatures=useLoaderData();
    const[job,setJob]=useState({});
    useEffect(()=>{
        const jobData=loadedJobsFeatures.find(jobFeatures=>jobFeatures.id===jobId);
        setJob(jobData);
    },[])
  
   const {job_position,salary_range,job_description,job_responsibility,educational_requirements,experience,phone,email,address}=job;
   
  return (
        <div className='mt-20 bg-current p-12'>
            <h3 className='text-green-600 text-4xl font-extrabold font-serif text-center mb-8'>Job Details</h3>
            <div className='md:grid grid-cols-3 gap-4'>
                <div className=' border border-white col-span-2 p-8'>
                   <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Job Description :  <span className='text-base text-white '>{job_description}</span></p>
                   <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Job Responsibility :  <span className='text-base text-white '>{job_responsibility}</span></p>
                   <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Educational Requirements :  <span className='text-base text-white '>{educational_requirements}</span></p>
                   <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Experience :  <span className='text-base text-white '>{experience}</span></p>
                </div>
                <div className=' border border-white p-8'>
                    <h3  className=' text-3xl text-center text-green-600'>job details</h3>
                    <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Salary :  <span className='text-base text-white '>{salary_range}</span></p>
                    <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Job Title :  <span className='text-base text-white '>{job_position}</span></p>
                    <h3  className=' text-3xl text-center text-green-600 mt-4'>Contact Information</h3>
                    <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Phone :  <span className='text-base text-white '>{phone}</span></p>
                    <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Email :  <span className='text-base text-white '>{email}</span></p>
                    <p className='mt-2 text-green-600 font-semibold font-serif text-xl'>Address :  <span className='text-base text-white '>{address}</span></p>
                    <button className='bg-zinc-400 px-16 py-3 rounded-xl font-extrabold text-white text-xl hover:bg-zinc-500 mt-6'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;