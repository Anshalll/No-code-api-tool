import React, { useState } from 'react'

export default function Listdatabase() {
    const [Dbs, setdbs] = useState([])
  return (
    <div className='scroller h-[calc(100%-200px)] p-[10px] shadow-xl rounded-lg bg-gray-900  overflow-y-auto flex-col flex gap-[20px]'>
        <button className='flex hover:bg-black p-[10px] hover:rounded-lg hover:border hover:border-gray-700'>Db1</button>
        

    </div>
  )
}
