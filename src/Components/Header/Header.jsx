import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const [open,setOpen]=useState(false);
    return (
        <nav className='flex justify-between items-center bg-current h-24 px-4 font-serif'>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                        {
                            (open? 
                            <span><XMarkIcon  className="h-6 w-6 text-white" /></span>
                            :<span><Bars3Icon  className="h-6 w-6 text-white" />
                            </span>)
                        }
            </div>
           <ul className={`md:flex md:static bg-current absolute ${open?'top-16':'-top-48'}`}>
                <li className='mr-8  text-white text-lg font-bold hover:text-emerald-600'><ActiveLink to='/'>Home</ActiveLink></li>
                <li className='mr-8   text-white text-lg font-bold hover:text-emerald-600'><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                <li className='mr-8  text-white text-lg font-bold hover:text-emerald-600'><ActiveLink to='/applied'>Applied Jobs</ActiveLink></li>
                <li className='mr-8  text-white text-lg font-bold hover:text-emerald-600'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                <li className='mr-6  text-white text-lg font-bold hover:text-emerald-600'><ActiveLink to='/login'>Login</ActiveLink></li>
               
              
                
            </ul>
            <h3 className='text-3xl font-extrabold text-white'>ProfessionHub</h3>
            <button className='bg-zinc-400 px-3 py-3 rounded-xl font-extrabold text-white text-xl hover:bg-zinc-500'>Start Applying</button>
        </nav>
    );
};

export default Header;