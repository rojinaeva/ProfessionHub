import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open,setOpen]=useState(false);
    return (
        <nav className='flex justify-between items-center bg-zinc-300 h-24 px-4 font-serif'>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                        {
                            (open? 
                            <span><XMarkIcon  className="h-6 w-6 text-neutral-950" /></span>
                            :<span><Bars3Icon  className="h-6 w-6 text-neutral-950" />
                            </span>)
                        }
            </div>
           <ul className={`md:flex md:static bg-zinc-300 absolute ${open?'top-12':'-top-48'}`}>
                <li className='mr-8 text-lg font-bold hover:text-emerald-600'><Link to='/'>Home</Link></li>
                <li className='mr-8 text-lg font-bold hover:text-emerald-600'><Link to='/statistics'>Statistics</Link></li>
                <li className='mr-8 text-lg font-bold hover:text-emerald-600'><Link to='/applied'>Applied Jobs</Link></li>
                <li className='mr-8 text-lg font-bold hover:text-emerald-600'><Link to='/blog'>Blog</Link></li>
                <li className='mr-8 text-lg font-bold hover:text-emerald-600'><Link to='/contact'>Contact</Link></li>
                <li className='mr-6 text-lg font-bold hover:text-emerald-600'><Link to='/login'>Login</Link></li>
            </ul>
            <h3 className='text-3xl font-extrabold text-teal-700'>ProfessionHub</h3>
            <button className='bg-zinc-400 px-3 py-3 rounded-xl font-extrabold text-white text-xl hover:bg-zinc-500'>Start Applying</button>
        </nav>
    );
};

export default Header;