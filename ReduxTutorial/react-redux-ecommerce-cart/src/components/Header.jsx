import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header() {
    return (
        <nav className='w-full bg-black'>
            <div className='flex justify-between items-center py-2 px-5 lg:w-2/3 lg:mx-auto w-full'>
                <h1 className="text-white text-xl font-bold  lg:text-2xl ">
                    Header
                </h1>
                <div className="">
                   <button className='cursor-pointer p-2'><span><FaShoppingCart className=' text-white text-lg lg:text-xl hover:text-gray-300 '/></span></button>
                </div>
            </div>
        </nav>
    )
}
