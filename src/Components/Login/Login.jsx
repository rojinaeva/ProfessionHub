import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/login.jpg'
import app from '../../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();

const Login = () => {
    const emailRef=useRef();
     const [user,setUser]=useState(null);
     const [success,setSuccess]=useState('');
     const [error,setError]=useState('');

    const handleLogin=(event)=>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            setUser(loggedUser);
            setSuccess('user logged in successfully');
            setError('');
            form.reset();
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const handleResetPassword=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        console.log(email);
        if(!email){
            alert('please provide your email to reset password');
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('please check your email');
        })
        .catch(error=>{
            setError(error.message);
        })
    }


    // login by email
   const handleGoogleLogin=()=>{
     signInWithPopup(auth,googleProvider)
     .then(result=>{
        const loggedUser=result.user;
        setUser(loggedUser);
        
     })
     .catch(error=>{
        setError(error.message);
     })
   }
  //  login by github
  const handleGithubLogin=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
       const loggedUser=result.user;
       setUser(loggedUser);
      
    })
    .catch(error=>{
       setError(error.message);
    })
  }   

    return (
        <div className='pt-8 pb-8 flex justify-between mt-20 mb-12 bg-green-200'>
            <div className='flex justify-center items-center'>
               <img className='w-3/4 rounded-3xl' src={img} alt="" />
            </div>
            <div className='mr-8 px-32 py-12 rounded-3xl shadow-2xl bg-violet-100'>
                <h2 className=" mb-6 text-center text-3xl font-extrabold text-gray-900">Please Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email Address
                    </label>
                    <input type="email" id="email" ref={emailRef} name="email" placeholder="Enter your email" className="shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700  focus:outline-none w-full"
                    required/>
               </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        password
                    </label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" className="shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700  focus:outline-none w-full"
                    required/>
                </div>
                    <button className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline shadow appearance-none w-full mb-4" type="submit">
                        Login
                    </button>
            </form>
              <p className='text-xl font-semibold mb-4'><small>Forget Password?<a onClick={handleResetPassword} href="" className='text-blue-500 hover:underline'>Reset Password</a></small></p>
              <p className='text-xl text-green-500 font-medium'><small>{success}</small></p>
              <p className='text-xl text-red-500 font-medium'><small>{error}</small></p>
              <div className='flex justify-center items-center flex-col'>
                <button onClick={handleGoogleLogin} className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline shadow appearance-none w-4/5 mb-4 mt-4" type="button">
                    Log In With Google
                </button>
                <button onClick={handleGithubLogin} className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline shadow appearance-none w-4/5 mb-4" type="button">
                    Log In With Github
                </button>
              </div>
              <p className='text-xl'><small className=''>Don't have an account ?<Link to='/signup' className='font-bold text-green-800'> Sign Up</Link></small></p>
              
              
            </div>
        </div>
    );
};

export default Login;