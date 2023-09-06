import React from 'react';
import img from '../../../images/person.jpg'

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center mt-32 p-16 bg-current'>
            <div className=' md:w-1/2 mr-20 mb-8'>
               <h3 className='font-serif text-7xl font-extrabold mb-6 text-white'>One Step Closer To Your <span className='text-green-600'>Dream Job</span></h3>
               <p className='text-lg font-medium font-serif text-gray-300'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className='mt-8 font-serif bg-zinc-400 px-3 py-3 rounded-lg font-extrabold text-white text-xl hover:bg-zinc-500'>Get Started</button>
            </div>
            <div className='md:w-1/2'>
              <img className='rounded-lg' src={img} alt="" />
            </div>

      


            
        </div>
    );
};

export default Banner;
