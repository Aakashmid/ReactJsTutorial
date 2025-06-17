import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slices/cart-slice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    function handleAddToCart() {
        dispatch(addToCart(product));
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id));
    }

    const cart = useSelector((state) => state.cart);  // total cost of cart
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="font-medium mb-2 w-full line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                {
                    cart.some((item) => item.id === product.id)
                        ?
                        <button onClick={handleRemoveFromCart} className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-600">
                            Remove from cart
                        </button>
                        :
                        <button onClick={handleAddToCart} className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>

                }
            </div>
        </div>)
}

export default ProductCard