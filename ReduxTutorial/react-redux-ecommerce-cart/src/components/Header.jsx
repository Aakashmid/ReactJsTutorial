import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Header() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cartItems);
    return (
        <nav className='w-full bg-gray-800 fixed top-0 z-50 h-16'>
            <div className='flex justify-between items-center h-full py-2 px-5 lg:w-[80%] lg:mx-auto w-full'>
                <h1 onClick={()=>navigate('/')} className="text-white text-xl font-bold p-2  lg:text-2xl  cursor-pointer">
                    Header
                </h1>
                <div className="">
                    <button onClick={() => navigate('/cart')} className='relative cursor-pointer '>
                        <span className="bg-red-400 text-xs rounded-full px-1 absolute -top-2 -right-2">{cart.length}</span>
                        <span>
                            <FaShoppingCart className=' text-white text-xl lg:text-2xl hover:text-gray-300 ' />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
