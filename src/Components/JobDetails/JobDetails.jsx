import React from 'react';


const JobDetails = () => {
 
  return (
        <div className='mt-20 bg-current p-12'>
            <h3 className='text-green-600 text-4xl font-extrabold font-serif text-center mb-8'>Job Details</h3>
            <div className='grid grid-cols-3 gap-4'>
                <div className='border border-white col-span-2 p-8'>
                   <p className='text-white'>Job Description : <span></span></p>
                </div>
                <div className='border border-white p-8'>
                    <h3  className='text-white'>job details</h3>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;