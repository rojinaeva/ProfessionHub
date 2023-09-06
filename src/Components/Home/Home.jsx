import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import JobsFeatures from '../JobsFeatures/JobsFeatures';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Categories></Categories>
           <JobsFeatures></JobsFeatures>
        </div>
    );
};

export default Home;