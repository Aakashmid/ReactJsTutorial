import React, { useState } from 'react'
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import IncDec from './products/IncDec';
import { useNavigate } from 'react-router';

export default function Card({ product }) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()


    const handleAddCart = () => {
        dispatch(addToCart({...product, quantity: 1}))
    }



    const itemInCart = cart.find((item) => item.id === product.id)

    return (
        <>
            <div onClick={()=>navigate(`/products/${product.title}`)} className={`${loading ? 'hidden' : ''} product-card flex flex-col bg-white cursor-pointer rounded-lg  px-4 py-2 `} style={{ boxShadow: ' 0px 0px 4px 1px rgba(97,97,97,1)' }}>
                <div className="product-image ">
                    <img src={product.thumbnail} alt="" className="h-[10rem]" onLoad={() => setLoading(false)} onError={() => setLoading(false)} />
                    {/* if image is failed to load and data is there then use default image */}
                </div>
                <hr className=" text-gray-500 py-1" />
                <div className="product-details ">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                </div>
                <div className=" gap-2 lg:gap-4 grid grid-cols-2 action buttons mt-auto">
                    {/* <button className=" px-2 py-1 bg-gray-800 rounded-lg lg:text-lg  text-white cursor-pointer">Details</button> */}
                    {!itemInCart ? <button onClick={handleAddCart} className=" px-2 py-1 bg-blue-500 rounded-lg lg:text-lg  text-white cursor-pointer">Add to cart
                    </button> :
                        <IncDec product={itemInCart} />
                    }
                </div>
            </div>

            {/* card skeleton */}
            {loading &&
                <div className=" product-card bg-white rounded-lg  px-4 py-2 " style={{ boxShadow: ' 0px 0px 4px 1px rgba(97,97,97,1)' }}>
                    <div className="product-image h-[10rem] w-full bg-gray-300 animate-pulse rounded-lg">
                    </div>
                    <hr className="text-gray-300 py-1" />
                    <div className="product-details space-y-2">
                        <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded animate-pulse w-1/4"></div>
                    </div>
                    <div className="gap-4 grid grid-cols-2 button mt-2">
                        <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
                        <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>}
        </>
    )
}