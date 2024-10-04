import React, { useEffect, useState, useRef } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Navbar() {

  const [Filter_state, setFilter_state] = useState(false)
  const filter_ref = useRef()

  const HandleFilters = () => {
    if (!Filter_state) {
        setFilter_state(true)
    }
  }

  useEffect(() => {
   


    if (Filter_state) {
        
      const filter_dialog = (e) => {
        if (filter_ref.current && !filter_ref.current.contains(e.target)) {
          
          setFilter_state(false)
        }
      }

      window.addEventListener('click', filter_dialog)

      
      return () => {
        window.removeEventListener('click', filter_dialog)
      }
    }

    
  }, [Filter_state]) 

  return (
    <nav className='bg-gray-800 w-full flex items-center justify-between h-[80px] shadow-lg px-[20px]'>

      <button title='Create api'> <AddOutlinedIcon className='bg-green-400 text-black border-2 border-black rounded-lg' /></button>

      <input type="text" className='bg-gray-900 border-2 rounded-lg border-black w-[600px] text-white p-[10px]' placeholder='Search api..' />

    
        <button ref={filter_ref} onClick={HandleFilters} className='rounded-lg bg-gray-900 px-[25px] py-[10px] relative'><p>Filters</p>        <span  className={`p-[10px] gap-[20px] flex flex-col  h-[400px] absolute ${Filter_state ? "block" : "hidden"} bg-gray-700 rounded-lg right-[10%] w-[300px] top-[50px]`}>
          <p className='w-full flex'>Method</p>
          <select name="method" id="method" className='bg-gray-800 w-full p-[10px]'>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="patch">PATCH</option>
            <option value="delete">DELETE</option>

          </select>
        </span></button>


    </nav>
  )
}
