import React from 'react'

const Search = ({search,setSearch,submitSearch}) => {
  return (
    <div className='my-4 w-full flex gap-5 items-center '>
        <input type='text' value={search} onKeyDown={(e)=>{e.key==='Enter' && submitSearch()}} className='grow p-2 focus:outline-none border-2 border-gray-600  rounded-xl' placeholder='search city name ..' onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={()=>submitSearch()} className="bg-gray-800 cursor-pointer px-4  p-2 rounded-xl hover:bg-gray-900 text-white font-medium">Search</button>
    </div>
  )
}

export default Search