import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IncDec from '../components/products/IncDec'
import { removeItem } from '../redux/features/cartSlice'

export default function CartDetails({ }) {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <div className="container mx-auto p-4 pt-20">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="grid gap-4">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

function CartItem({ item }) {
    const dispatch = useDispatch()
    const handleRemoveItem = () => {
        dispatch(removeItem(item.id))
    }   



    return (
        <div className="border rounded-lg p-4  flex items-center gap-4">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover" />
            <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
                <div className="mt-2 flex flex-col  lg:grid grid-cols-3 gap-4" >
                    <IncDec product={item}/>
                    <button onClick={handleRemoveItem} className="bg-red-400 text-white px-4 py-1 rounded-lg hover:bg-red-500 cursor-pointer transition duration-300">Remove Item</button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300">Buy Now</button>
                </div>
            </div>
        </div>
    )
}