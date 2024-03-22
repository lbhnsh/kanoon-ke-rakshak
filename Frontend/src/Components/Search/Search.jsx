import React from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
    const list={
        vedant:"href1",
        labhansh:"href2",
        Parth:"href3",
        Divyanhsu:"href4",
        Sushant:"href5"
    }
  return (
    <>
    <div className="flex flex-col justify-center items-center">
        <h2 className="text-7xl font-bold pl-4 pt-4">Project Title</h2>
        <p className="mt-10 text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="mt-10 flex items-center justify-center text-center">
            <input name="" placeholder="Type here to search" className="w-4/5 pl-6 py-4 text-4xl rounded-2xl border-6 border-gray-200 hover:border-green-500"/>
            <button className='flex text-4xl border-2 border-gray-200 py-3 px-2 ml-3 rounded-lg'><FaSearch className="text-5xl mr-2" /> Search</button>

        </div>
    </>
  )
}

export default Search