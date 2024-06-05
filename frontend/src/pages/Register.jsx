import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Register = () => {
               const navigate = useNavigate()
               const {register , handleSubmit,reset} = useForm()
               const onSubmit =async(data)=>{
                              try{
                                             const res = await axios.post("http://localhost:3000/api/v1/user/register",data);
                                             if(res.status ===200){
                                                            const token = res.data.token;
                                                            localStorage.setItem("token",token)
                                                            alert("registerd")
                                                            navigate("/home")
                                             }
                                             else{
                                                            localStorage.clear()
                                                            alert("backend down or duplicate error")
                                                            reset()
                                             }
                              }
                              catch(err){
                                             localStorage.clear()
                                             console.log(err)
                              }
               }
  return (
    <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
               <div className='w-[28%] h-[70%] bg-[#fff] rounded-lg py-5 px-5'>
                              <div className='w-full text-center'>
                                             <h1 className='text-4xl underline font-bold'>Sign Up</h1>
                                             <p className='mt-5 opacity-65 text-[12px] leading-none'>Enter your info to create an</p>
                                             <p className='opacity-65 text-[12px]'>account</p>
                              </div>

                              <div>
                                             <form onSubmit={handleSubmit(onSubmit)}>
                                                            <div className='flex w-full flex-col'>
                                                                           <label className='pl-2 text-sm  mt-4'>username</label>
                                                                           <input {...register("username")} className='border-[2px] border-black/20 p-[5px] rounded-lg'  type="text" name="username" placeholder='username' />
                                                            </div>
                                                            <div className='flex w-full flex-col mt-2'>
                                                                           <label className='pl-2 text-sm  '>firstName</label>
                                                                           <input {...register("firstname")} className='border-[2px] border-black/20 p-[5px] rounded-lg'  type="text" name="firstname" placeholder='firstName' />
                                                            </div>
                                                            <div className='flex w-full flex-col mt-2'>
                                                                           <label className='pl-2 text-sm  '>lastName</label>
                                                                           <input {...register("lastname")} className='border-[2px] border-black/20 p-[5px] rounded-lg'  type="text" name="lastname" placeholder='lastName' />
                                                            </div>
                                                            <div className='flex w-full flex-col mt-2'>
                                                                           <label className='pl-2 text-sm  '>password</label>
                                                                           <input {...register("password")} className='border-[2px] border-black/20 p-[5px] rounded-lg'  type="password" name="password" placeholder='password' />
                                                            </div>

                                                            <button type='submit' className='w-full bg-black rounded-lg  text-white p-[5px] mt-2'>Sign up</button>
                                             </form>

                                              <div className='w-full text-center'>
                                                            <p className='text-sm opacity-80 mt-1'>Already have a Account ? <span onClick={()=>navigate("/login")} className='font-bold cursor-pointer underline'>Sign-In</span></p>
                                              </div>
                              </div>
               </div>
    </div>
  )
}

export default Register