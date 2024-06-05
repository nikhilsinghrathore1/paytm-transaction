import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({data}) => {
               const navigate = useNavigate()
  return (
    <div className='w-full mt-3 h-[9vh] flex items-center justify-between shadow-inner'>
               <div className='flex items-center gap-2'>
                              <div className='w-9 h-9 rounded-full bg-[#DFE3EE] flex items-center justify-center font-bold uppercase'>{data.username[0]}</div>
                              <p className='font-semibold'>{data.username}</p>
               </div>

               <div>
                              <button onClick={()=>navigate("/transfer?username="+data.username)} className='w-32 h-10 bg-black rounded-lg text-white'>Send Money</button>
               </div>
    </div>
  )
}

export default User