import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
               const {register , handleSubmit , reset} =useForm()
               const navigate = useNavigate()
               const onSubmit = async(data)=>{
                              try{
                                             const res = await axios.post("http://localhost:3000/api/v1/user/login",data);
                                             if(res.status === 200){
                                                            const token = res.data.token;
                                                            localStorage.setItem("token",token)
                                                            alert("login success")
                                                            navigate("/home")
                                             }
                                             else{
                                                            localStorage.clear()
                                                            alert("not a registered user")
                                             }
                              }
                              catch(err){
                                             console.log(err)
                              
                              }
               }
  return (
               <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
               <div className='w-[28%] h-[70%] bg-[#fff] rounded-lg py-5 px-5'>
                              <div className='w-full text-center'>
                                             <h1 className='text-4xl underline font-bold'>Login</h1>
                                             <p className='mt-5 opacity-65 text-[12px] leading-none'>Enter your info to Access your</p>
                                             <p className='opacity-65 text-[12px]'>account</p>
                              </div>

                              <div>
                                             <form onSubmit={handleSubmit(onSubmit)}>
                                                            <div className='flex w-full flex-col'>
                                                                           <label className='pl-2 text-sm  mt-12'>username</label>
                                                                           <input {...register("username")}className='border-[2px] border-black/20 p-[5px] rounded-lg'  type="text" name="username" placeholder='username' />
                                                            </div>
                                                           
                                                            <div className='flex w-full flex-col mt-2'>
                                                                           <label className='pl-2 text-sm  '>password</label>
                                                                           <input {...register("password")} className='border-[2px] border-black/20 p-[5px] rounded-lg'  type="text" name="password" placeholder='password' />
                                                            </div>

                                                            <button type='submit' className='w-full bg-black rounded-lg  text-white p-[5px] mt-12'>Sign up</button>
                                             </form>

                                              <div className='w-full text-center'>
                                                            <p className='text-sm opacity-80 mt-2'>Don't have an account? <span onClick={()=>navigate("/")} className='font-bold cursor-pointer underline'>Sign-Up</span></p>
                                              </div>
                              </div>
               </div>
    </div>
  )
}

export default Login