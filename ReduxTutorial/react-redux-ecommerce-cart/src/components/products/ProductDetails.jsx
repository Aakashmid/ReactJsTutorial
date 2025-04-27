import React, { useState } from 'react'

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Add to cart logic here
  }

  const handleBuyNow = () => {
    // Buy now logic here
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 pt-20 max-w-6xl mx-auto">
      <div className="md:w-1/2">
        <img src="/images/default-prod.jpeg" alt="Product" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Product Name</h1>
        <p className="text-2xl font-semibold text-gray-900">$99.99</p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center gap-4">
          <label className="text-gray-700">Quantity:</label>
          <button 
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button 
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="flex gap-4">
          <button 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button 
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}