import React from 'react';
import Image from '../images/rocket.jpg';
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineArrowRight , AiFillGithub } from 'react-icons/ai'


export default  function Login() {
    return (
        <div className ="h-screen bg-violet-600 flex"> 
            <div className="w-[28%] h-[40rem] bg-white flex flex-col mt-8 ml-[28rem] rounded-[24px] overflow-hidden ">
                    <img src={Image} className='w-full h-[12rem]' alt='rocket'/>
                    <h1 className='font-bold mt-2 text-center text-[21px] text-violet-600'>Welcome to Bardeen</h1>
                    <p className=' mt-1 text-center text-[15px] text-gray-400'>Let's log in to launch your automations</p>
                    
                    <div>
                       
                        <form className=" w-full max-auto bg-white p-4  h-screen">
                                <div className="flex flex-col mb-2 mt-2 ">
                                    <input className="border p-4 rounded-[10px]   outline-none" type="text" placeholder="Email Address " name="email" />
                                    
                                </div>

                                <div className="flex flex-col py-3">
                                    <input className="border p-4 rounded-[10px] outline-none " type="password" placeholder="Password " name="password" />
                                    
                                </div>
                                <div className ="flex flex-row  ">
                                    <a href='/Signup' className='text-violet-600 font-bold text-[14px]' >Create account</a>
                                    <a href='/Forgotpass' className='text-violet-600 font-bold  text-[14px] ml-[8rem]' >Forgot Password ?</a>


                                </div>
                  
                  <button className="border w-full my-4 py-2 bg-violet-600 rounded-lg text-white font-bold  text-[18px]  hover:bg-violet-700 relative" >Login </button>
                  <button className="border w-full  py-1  rounded-lg  text-[14px] font-bold relative flex flex-row indent-3 items-center text-gray-700" >
                    <FcGoogle className=' w-8 h-8 ml-2' />
                    Sign in with Google
                    <AiOutlineArrowRight className='w-8 justify-end ml-[8rem]  text-gray-400' />
                    </button>
                    <button className="mt-3 border w-full  py-1  rounded-lg  text-[14px] font-bold relative flex flex-row indent-3 items-center text-gray-700" >
                    <AiFillGithub className=' w-8 h-8 ml-2' />
                    Sign in with Google
                    <AiOutlineArrowRight className='w-8 justify-end ml-[8rem]  text-gray-400' />
                    </button>


                  
              </form>
                        
                    </div>
            </div>
           

    
        </div>
    );
}

