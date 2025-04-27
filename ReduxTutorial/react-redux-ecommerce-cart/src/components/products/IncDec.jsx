import React from 'react'
import { decrementQuantity, incrementQuantity } from '../../redux/features/cartSlice'
import { useDispatch } from 'react-redux'

// increament and decrement component
export default function IncDec({product}) {
    const dispatch = useDispatch()

    const handleDecrement = () => {
        dispatch(decrementQuantity(product.id))
    }
    const handleIncrement = () => {
        dispatch(incrementQuantity(product.id))
    }
    return (
        <div className="flex items-center gap-2 mt-2">
            <button onClick={handleDecrement} className="cursor-pointer px-4 hover:bg-gray-200 py-1 bg-gray-300 transition-colors duration-300 rounded">-</button>
            <span>{product.quantity}</span>
            <button onClick={handleIncrement} className="cursor-pointer px-4 hover:bg-gray-200 py-1 bg-gray-300 transition-colors duration-300 rounded">+</button>
        </div>
    )
}
