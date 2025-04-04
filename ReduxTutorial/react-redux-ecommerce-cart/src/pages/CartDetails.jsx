import React, { useState } from 'react'

export default function CartDetails() {
    const [cartItems, setCartItems] = useState([]);
    const CartItem = ({ cart }) => {
        return (
            <tr className="border-b">
                <td className="py-2 px-5 text-left">
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
                <td className="py-2 px-5 text-left">
                    <img src={cart.image} alt={cart.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="py-2 px-5 text-left">{cart.name}</td>
                <td className="py-2 px-5 text-left">${cart.price}</td>
                <td className="py-2 px-5 text-left">
                    <div className="flex items-center gap-2">
                        <button className="bg-gray-200 px-2 py-1 rounded">-</button>
                        <span>{cart.quantity}</span>
                        <button className="bg-gray-200 px-2 py-1 rounded">+</button>
                    </div>
                </td>
                <td className="py-2 px-5 text-right">${cart.price * cart.quantity}</td>
            </tr>
        )
    }


    return (
        <div className='cart-detail-container'>
            <div className="mt-20 rounded-xl w-[70%] mx-auto overflow-hidden">
                <div className="header py-3 bg-gray-800 flex justify-between items-center px-5 ">
                    <h1 className="text-2xl text-white">Cart Calculation(2)</h1>

                    {/* on click empty cart remove all cart items , only show empty cart items when cart is not empty */}
                    <button className="empyt-cart-btn bg-red-500 text-white font-semibold cursor-pointer hover:bg-red-400 rounded-lg py-1 px-4">
                        Empty Cart
                    </button>
                </div>
                <div className="content">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 px-5 text-left">Action</th>
                                <th className="py-2 px-5 text-left">Product</th>
                                <th className="py-2 px-5 text-left">Name</th>
                                <th className="py-2 px-5 text-left">Price</th>
                                <th className="py-2 px-5 text-left">Qty</th>
                                <th className="py-2 px-5 text-right">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems && cartItems.length != 0 && cartItems.map((cart, index) => {                                
                            <CartItem cart={cart} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
