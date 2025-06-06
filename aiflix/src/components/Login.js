import React, { useRef } from 'react';
import Header from './Header';
import { useState } from 'react';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/fireBase';


// Use formik library for validations if there are no.of forms to check validations

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg,setErrMsg] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = ()=>{
        setIsSignIn(!isSignIn); 
    }

    const handleSignIn = ()=>{
        const msg = checkValidData(email?.current?.value,password?.current?.value,name?.current?.value || "",isSignIn);
        setErrMsg(msg);

        if(msg) return;

        if(!isSignIn){
          createUserWithEmailAndPassword(auth,email?.current?.value,password?.current?.value)
          .then((userCredential) => {
            // Signed up   
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + " : " + errorMessage);
          });
        }
        else{
          signInWithEmailAndPassword(auth,email?.current?.value,password?.current?.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrMsg(errorCode + " : " + errorMessage);
            });
        }
    }
  return (
    <div className="relative h-screen w-full">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover scale-125 -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
        alt="bg"
      />
      <div className="absolute top-0 left-0 w-full h-full scale-125 bg-black opacity-60 -z-0" />
      <Header />
      <div className="flex justify-center items-center h-screen z-10 relative m-auto">
        <div className="bg-black bg-opacity-75 rounded-md w-full max-w-md py-12 px-16">
          <h1 className="text-white text-3xl font-bold mb-8">{isSignIn? "Sign In" : "Sign Up"}</h1>

          <form onSubmit={(e)=>{e.preventDefault()}}className="flex flex-col space-y-5">
            {!isSignIn && 
                <input
                ref={name}
                className="p-4 bg-transparent bg-gray-50 bg-opacity-5 text-white rounded placeholder-gray-400 focus:ring-2 focus:ring-white border"
                type="text"
                placeholder="Enter your name"
                />
            }
            <input
                ref={email}
              className="p-4 bg-transparent bg-gray-50 bg-opacity-5 text-white rounded placeholder-gray-400 focus:ring-2 focus:ring-white border"
              type="text"
              placeholder="Email or phone number"
            />
            <input
                ref={password}
              className="p-4 bg-transparent bg-gray-50 bg-opacity-5 text-white rounded placeholder-gray-400 focus:ring-2 focus:ring-white border"
              type="password"
              placeholder="Password"
            />
            <p className='text-red-500'>{errMsg}</p>
            <button onClick={handleSignIn} className="bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition">
              {isSignIn? "Sign In" : "Sign Up"}
            </button>
            {isSignIn && <h1 className='text-gray-400 text-center'>OR</h1>}
            {isSignIn && <button className="text-white py-2 rounded font-semibold bg-gray-50 bg-opacity-20">
              Use a sign-in code
            </button>}
            {isSignIn && <a href="/forget"className='text-white text-center underline'>Forgot password?</a>}

            {isSignIn && <div className="flex items-center text-gray-400 gap-3">
                <input type="checkbox" className="form-checkbox size-4" />
                <p className='text-white text-[16px]'>Remember me</p>
            </div>}

            <p className="text-gray-400">
                {isSignIn ? "New to Netflix? " : "Already Registered? " }
                <span onClick={toggleSignIn} className="text-white hover:underline cursor-pointer">{isSignIn ? "Sign Up" : "Sign In"}</span>.
            </p>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <span className="text-blue-500 hover:underline cursor-pointer">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
