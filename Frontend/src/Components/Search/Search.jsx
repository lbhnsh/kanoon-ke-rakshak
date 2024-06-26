import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
  const [click,setClick] =useState(false);
  const [search,setSearch]=useState("");
  const lists = [
    { name: "vedant", href: "href1" },
    { name: "labhansh", href: "href2" },
    { name: "Parth", href: "href3" },
    { name: "Divyanhsu", href: "href4" },
    { name: "Sushant", href: "href5" }
  ];
  
    const onClick=(()=>{
      setClick(true);
      e.preventDefault()
        const blog = {title,body,author};
        setIsLoading(true)
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog),
            author:JSON.stringify(author)
        }).then(()=>{
            console.log("New Blog Added")
            setIsLoading(false)
        })
        navigate('/')
    })

    const handleSearch=(()=>{
      
    })
  return (
    <>
    <div className="flex flex-col justify-center items-center">
        <h2 className="text-7xl font-bold pl-4 pt-4">Project Title</h2>
        <p className="mt-10 text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="mt-10 flex items-center justify-center text-center">
            <input type='text' name="" placeholder="Type here to search" className="w-4/5 pl-6 py-4 text-4xl rounded-2xl border-6 border-gray-200 hover:border-green-500"
            onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className='flex text-4xl border-2 border-gray-200 py-3 px-2 ml-3 rounded-lg' onClick={search&& (onClick)} ><FaSearch className="text-5xl mr-2" /> Search</button>
          </div>
        <div className='flex items-center justify-center flex-col h-screen'>
        {click && (
          lists.map((item, index) => (
            <div key={index}>
              {item.name}: {item.href}
            </div>
          ))
        )}
        </div>
    </>
  )
}
export default Search