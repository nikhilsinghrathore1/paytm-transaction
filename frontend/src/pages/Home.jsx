import axios from 'axios'
import React, { useEffect, useState , Suspense } from 'react'
import User from '../components/User'

const Home = () => {
  const [userdata, setUser] = useState([]) 
  const [filter , setFilter] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/user/search?filter="+filter)
        console.log(res.data.user)
        setUser(res.data.user)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [filter]) 


  return (
    <div className='w-full relative '>
      <nav className='w-full h-[8vh] px-5 shadow-lg flex items-center justify-between'>
        <h1 className='text-md '>payTM App</h1>
        <div className='flex items-center gap-6 text-normal'>
          Hello
          <div className='w-10 flex items-center justify-center h-10 rounded-full border-[2px] border-black/30 bg-[#DEE3EF] text-balance font-bold uppercase'>U</div>
        </div>
      </nav>
      <div className='px-10 py-2 mt-10'>
        <div>
          <h1 className='text-lg font-semibold'>Your balance &nbsp; Rs <span>10,000</span></h1>
        </div>
        <div className='flex flex-col gap-1 '>
          <label className='user text-xl font-bold mt-5'>User</label>
          <input onChange={(e)=>setFilter(e.target.value)} className='border-[1px] border-black/20 p-1 rounded-[5px]'  type="text" placeholder='Search users..' />
        </div>
        {userdata.map(user=><User data ={user}/>)}
      </div>
    </div>
  )
}



export default Home
