import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { getShoppingCart } from '../../../utilities/fakeDb';


const ReviewItem = (props) => {
    const {id,logo,job_position,company_name,job_type,job_site,job_location,salary_range}=props.appliedItem;
    const shoppingCart =getShoppingCart()
    const quantity = shoppingCart[id] || 0;
    return (
        <div className='mt-12 bg-current p-12'>
           <div className='p-4 border border-white rounded-xl'>
               <img className='h-48 w-96 rounded-lg mb-4' src={logo} alt="" />
                <h3 className='mt-8 text-white text-2xl font-extrabold font-serif'>{job_position}</h3>
                <p className='mt-2 text-gray-300 font-semibold font-serif text-xl'>{company_name}</p> 
                <p className=' mt-4 '>
                <span className='text-white font-serif font-extrabold text-base border border-white px-5 py-2 mr-2'>{job_type}</span>
                
                <span className='text-white font-serif font-extrabold text-base border border-white px-5 py-2'>{job_site}</span>
                </p>
           <div className='mt-4'>
                <p><span className='mr-2'><FontAwesomeIcon className='text-white w-6 h-6' icon={faLocationDot} /></span><span className=' text-gray-300 font-semibold font-serif text-xl'>{job_location}</span></p>
                <p className='mt-2 mb-4'><span className='mr-2'><FontAwesomeIcon className='text-white w-6 h-6' icon={faDollarSign} /></span><span className=' text-gray-300 font-semibold font-serif text-xl'>Salary : {salary_range}</span></p>
                <span className='text-white font-serif font-extrabold text-base border border-white px-5 py-2 mr-2'>Applied For This Position : {quantity}
                </span>
                
           </div>
     <Link to={`/job/${id}`}> <button className='bg-zinc-400 px-3 py-3 rounded-xl font-extrabold text-white text-xl hover:bg-zinc-500 mt-6'>View Details</button></Link>
        
     </div>

     </div>
    );
};

export default ReviewItem;