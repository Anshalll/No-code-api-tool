import React from 'react'
import { AppLayout } from './layout/Layout'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const  App = () => {
  return (
    <div className='h-[calc(100%-80px)] p-[20px]  w-full bg-gray-900'>

      <div className='flex w-full gap-[20px] justify-between items-center'>
        <select name="" id="" className='rounded-lg bg-gray-800 border-2 border-black flex-1 p-[10px]'>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="patch">PATCH</option>
          <option value="delete">DELETE</option>



        </select>

      <input type="text" className='rounded-lg bg-gray-800 border-2 border-black flex-1 text-white p-[10px]' placeholder='endpoint' />
      <input type="text" className='rounded-lg bg-gray-800 border-2 border-black flex-1 text-white p-[10px]' placeholder='Function name' />

      <button className='w-[100px] text-[crimson] '><DeleteOutlineOutlinedIcon/></button>

      </div>

    </div>
  )
}


export default AppLayout()(App)