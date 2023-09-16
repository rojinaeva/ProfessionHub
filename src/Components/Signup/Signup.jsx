import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/signup.jpg'
import app from '../../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";

const auth=getAuth(app);
const Signup = () => {
    const [success,setSuccess]=useState('');
    const [error,setError]=useState('');
   
const handleSignup=(event)=>{
    event.preventDefault();
    setError('');
    setSuccess('');
    const form=event.target;
    const name=form.name.value;
    // const photo=form.photoURL.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password);

   if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)){
    setError(' Must be 8-15 characters which contain at least one uppercase,one lowercase,one special character and one numeric digit.');
    return;
   }


    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        setSuccess('user has been created successfully');
        setError('');
        form.reset();
        upadteUserOfProfile(user,name);
        sendEmailVerification(user)
        .then(result=>{
            console.log(result);
            alert('please verify your email address');
        })
    
    })
    .catch(error=>{
        setError(error.message);
        setSuccess('');
    })

    const upadteUserOfProfile=(user,name)=>{
        updateProfile(user,{
            displayName:name
        })
        .then(()=>{
            console.log('user profile updated');
            
        })
        .then(error=>{
            setError(error.message);
        })
    }
    
}
  


    return (
        <div className=' flex justify-between mt-20 mb-12 bg-green-200 pt-8 pb-8'>
        <div className='mr-8 flex justify-center items-center'>
           <img className=' w-4/5 rounded-3xl'src={img} alt="" />
        </div>
        <div className=' mr-8 px-32 py-12 rounded-3xl shadow-2xl bg-violet-100'>
            <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">Please Register</h2>
            <form onSubmit={handleSignup}>
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Your FullName
                        </label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" className="shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700  focus:outline-none w-full"
                        required/>
                    </div>
                    {/* <div className="mb-2">
                        <label htmlFor="photoURL" className="block text-gray-700 font-bold mb-2">
                        Your PhotoURL
                        </label>
                        <input type="text" id="photoURL" name="photoURL" placeholder="place your photo" className="shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700  focus:outline-none w-full"
                        required/>
                    </div> */}
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email Address
                        </label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" className="shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700  focus:outline-none w-full"
                        required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            password
                        </label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" className="shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700  focus:outline-none w-full"
                        required/>
                </div>
            
          <div>
            <label>
                <input type="checkbox"
                name="acceptedTerms"/><a href="/terms" target="_blank" rel="noopener noreferrer"  > Accept Terms and Conditions</a>
            </label>
          </div>
            <button className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline shadow appearance-none w-full mb-4 mt-4" type="submit">
                Signup
            </button>
            <p className='text-xl text-red-500 font-medium'><small>{error}</small></p>
            <p className='text-xl text-green-500 font-medium'><small>{success}</small></p>
        </form>
          <p className='text-xl'><small >Already have an account ?<Link to='/login' className='font-bold text-green-800'> Login</Link></small></p>
       
          
          
        </div>
    </div>
    );
};

export default Signup;