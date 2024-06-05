import axios from 'axios';
import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const SendMoney = () => {
               const [SearchParams] =useSearchParams()
               const [Amount, setamount] = useState(0)
             const name = SearchParams.get("username");
             console.log(name)

            const onsubmit =async()=>{
                              try{
                                             const res = await axios.post("http://localhost:3000/api/v1/account/transfer" , {to:name,amount:Amount},{
                                                            headers:{
                                                                           authorization :localStorage.getItem("token")
                                                            }
                                             })
                              }
                              catch(err){

                              }
             }
  return (
    <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
               
               <div className='w-80 h-72 bg-white rounded-md'> 
               <div className='w-full text-center'>
                              <h1 className='font-bold capitalize text-[25px] mt-5'>send money</h1>
               </div>

               <div className='w-full px-5 pt-10 '>
               
               <div className='flex items-center gap-2'>
               <div className='w-10 h-10 rounded-full text-xl font-bold bg-[#1EBC51] flex items-center justify-center uppercase'>{name[0]}</div>
               <h1 className='font-semibold'>{name}</h1>

               </div>

               <div className='flex flex-col mt-6'>
                              <label className='text-xs font-semibold mb-[2px] pl-1'>Amount (in Rs)</label>
                              <input onChange={(e)=>setamount(e.target.value)} className='p-1 border-[1px] border-black/20 rounded-md' type="text" name="money" placeholder='Amount' />
                              <button onClick={onsubmit} className='w-full bg-[#1EBC51] rounded-md text-white p-[6px] mt-3 font-semibold text-sm' type='submit'>Initiate Transfer</button>
               </div>

               </div>
               </div>
    </div>
  )
}

export default SendMoney