import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Applied = () => {
    const [open,setOpen]=useState(false);
     
    const appliedData=useLoaderData();
    const [allAppliedData,setAllAppliedData]=useState(appliedData);
    // console.log(appliedData);
   const toggleDropdown=()=>{
      setOpen(!open);
   }

   const handleFilterByJobsite=(jobSite)=>{
      const filteredData=appliedData.filter(appData=>appData.job_site===jobSite);
      setAllAppliedData(filteredData);
   }
   const handleReset=()=>{
    setAllAppliedData(appliedData);
   }
   
    return (
        <div>
            <div className="flex justify-end  mb-8 ">
                <button onClick={()=>toggleDropdown()} className='bg-zinc-400 px-16 py-3 rounded-xl font-extrabold text-white text-xl hover:bg-zinc-500 mt-2 '>Filter By</button>
                {
                    open && (
                        <div className=' border border-gray absolute top-40  w-32  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col'>
                            <span onClick={()=>handleFilterByJobsite('Onsite')} className='text-green-500 text-base font-semibold font-serif hover:bg-zinc-500 w-32'>Onsite</span>
                            <span onClick={()=>handleFilterByJobsite('Remote')} className='text-green-500 text-base font-semibold font-serif hover:bg-zinc-500 w-32'>Remote</span>
                            <span onClick={()=>handleReset()} className='text-green-500 text-base font-semibold font-serif hover:bg-zinc-500 w-32'>Reset</span>
                        </div>


        
                    )
                } 
            </div>
            <div>
                {
                    allAppliedData.map(appliedItem=><ReviewItem
                    key={appliedItem.id}
                    appliedItem={appliedItem}></ReviewItem>)
                }
           
            </div>
        </div>
    );
};

export default Applied;