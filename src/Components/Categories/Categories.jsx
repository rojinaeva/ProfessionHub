import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories,setCategories]=useState([]);

   useEffect(()=>{
    fetch('categoryList.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
   },[])
    return (
        <div className='mt-20 bg-current p-12'>
        <div className='text-center mb-8'>
            <h3 className='text-white text-5xl font-extrabold font-serif'>Job <span className='text-green-600'>Category</span> List</h3>
            <p className='mt-4 text-lg font-medium font-serif text-gray-300'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid grid-cols-4 gap-4'>
            {
                categories.map(category=><Category
                key={category.id}
                category={category}></Category>)
            }
        </div>
    </div>
    );
};

export default Categories;

