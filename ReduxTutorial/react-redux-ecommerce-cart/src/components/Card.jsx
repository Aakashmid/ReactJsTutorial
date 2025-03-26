import React, { useState } from 'react'

export default function Card({ product }) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <div className={`${loading ? 'hidden' : ''} product-card bg-white rounded-lg  px-4 py-2 `} style={{ boxShadow: ' 0px 0px 4px 1px rgba(97,97,97,1)' }}>
                <div className="product-image ">
                    <img src={product.thumbnail} alt="" className="h-[10rem]" onLoad={() => setLoading(false)} onError={() => setLoading(false)} />
                    {/* if image is failed to load and data is there then use default image */}
                </div>
                <hr className=" text-gray-500 py-1" />
                <div className="product-details ">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                </div>
                <div className=" gap-4  grid grid-cols-2 button mt-2">
                    <button className="px-4 py-1 bg-gray-800 rounded-lg text-lg font-medium text-white cursor-pointer">Details</button>
                    <button className="px-4 py-1 bg-blue-500 rounded-lg text-lg font-medium text-white cursor-pointer">Add to cart</button>
                </div>
            </div>
            {loading &&
                <div  className=" product-card bg-white rounded-lg  px-4 py-2 " style={{ boxShadow: ' 0px 0px 4px 1px rgba(97,97,97,1)' }}>
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
