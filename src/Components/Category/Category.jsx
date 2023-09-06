import React from 'react';

const Category = (props) => {
    const {img,title,quantity}=props.category;
    return (
        <div>
           <img className='h-48 w-72 rounded-lg mb-4' src={img} alt="" />
           <div className='text-center'>
                <h3 className='text-white text-xl font-extrabold font-serif hover:text-emerald-600'>{title}</h3> 
                <p className=' text-lg font-medium font-serif text-gray-300'><span>{quantity} Jobs Available</span></p>
           </div>
        </div>
    );
};

export default Category;