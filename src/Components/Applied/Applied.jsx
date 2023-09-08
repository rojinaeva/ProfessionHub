import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Applied = () => {
     
    const appliedData=useLoaderData();
    // console.log(appliedData);
   
    return (
        <div>
            
            {
                appliedData.map(appliedItem=><ReviewItem
                key={appliedItem.id}
                appliedItem={appliedItem}></ReviewItem>)
            }
           
        </div>
    );
};

export default Applied;