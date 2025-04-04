import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router';

export default function Header() {
    const navigate = useNavigate();
    return (
        <nav className='w-full bg-gray-800 fixed top-0 z-50'>
            <div className='flex justify-between items-center py-2 px-5 lg:w-[80%] lg:mx-auto w-full'>
                <h1 onClick={()=>navigate('/')} className="text-white text-xl font-bold p-2  lg:text-2xl  cursor-pointer">
                    Header
                </h1>
                <div className="">
                    <button onClick={() => navigate('/cart')} className='cursor-pointer '>
                        <span>
                            <FaShoppingCart className=' text-white text-xl lg:text-2xl hover:text-gray-300 ' />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
