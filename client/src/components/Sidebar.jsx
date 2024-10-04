import React, { useState } from 'react'
import Listdatabase from './Listdatabase'
export default function Sidebar() {

  const [Db_connection, setDb_connection] = useState(false)

  return (
    <aside className='w-[500px] h-full bg-gray-800 px-[20px] flex flex-col gap-[20px]'>
      <h1 className='headertitle text-white font-bold text-lg h-[80px] flex items-center tracking-wider'>Anshal's no code api tool</h1>

      {Db_connection ? <button onClick={() => setDb_connection(false)} className='basictext  bg-green-400 text-black p-[10px] rounded-lg border-2 border-black'>Database connected</button> : <button onClick={() => setDb_connection(true)} className='basictext  bg-[crimson] text-black p-[10px] rounded-lg border-2 border-black'>Connect to database</button>
      }

      <Listdatabase />

    </aside>
  )
}
