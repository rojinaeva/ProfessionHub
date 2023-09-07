import React, { useEffect, useState } from 'react';
import JobFeatures from '../Job-Features/JobFeatures';


const JobsFeatures = () => {
    const [jobs,setJobs]=useState([]);

    useEffect(()=>{
        fetch('jobFeatured.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    
    return (
        <div className='mt-20 bg-current p-12'>
           <div className='text-center mb-8'>
             <h3 className='text-green-600 text-5xl font-extrabold font-serif'>Featured Jobs</h3>
             <p className='mt-4 text-lg font-medium font-serif text-gray-300'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div> 
            <div className='grid grid-cols-2 gap-4'>
                {
                    jobs.map(job=><JobFeatures
                    key={job.id}
                    job={job}
                    ></JobFeatures>)
                }
            </div>

        </div>
    );
};

export default JobsFeatures;