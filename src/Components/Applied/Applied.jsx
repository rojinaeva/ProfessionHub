import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Applied = () => {
    const [open,setOpen]=useState(false);
     
    const appliedData=useLoaderData();
    // console.log(appliedData);
   const toggleDropdown=()=>{
      setOpen(!open);
   }
    return (
        <div>
            <div className="relative inline-block mb-4 ">
                <button onClick={()=>toggleDropdown()} className='bg-zinc-400 px-16 py-3 rounded-xl font-extrabold text-white text-xl hover:bg-zinc-500 mt-6 '>Filter By</button>
                {
                    open && (
                        <div className=' border border-gray absolute  right-0 w-32  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <p className='text-green-500 text-base font-semibold font-serif hover:bg-zinc-500 w-32'>Onsite</p>
                            <p className='text-green-500 text-base font-semibold font-serif hover:bg-zinc-500 w-32'>Remote</p>
                        </div>


        
                    )
                } 
            </div>
            <div>
                {
                    appliedData.map(appliedItem=><ReviewItem
                    key={appliedItem.id}
                    appliedItem={appliedItem}></ReviewItem>)
                }
           
            </div>
        </div>
    );
};

export default Applied;