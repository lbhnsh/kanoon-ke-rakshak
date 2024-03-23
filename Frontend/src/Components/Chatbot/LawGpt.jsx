import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
function LawGpt() {
    const [search,setSearch]=useState("");
  return (
    <>
    <div className='my-10 flex items-center justify-center mr-10'>
    <input type='text' name="" placeholder="Type here to search" className="w-4/5 pl-6 py-4 text-4xl rounded-2xl border-6 border-gray-200 hover:border-green-500"
            onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className='flex text-4xl border-2 border-gray-200 py-3 px-2 ml-3 rounded-lg'><FaSearch className="text-5xl mr-2" /> Search</button>
            </div>
    </>
  )
}

export default LawGpt