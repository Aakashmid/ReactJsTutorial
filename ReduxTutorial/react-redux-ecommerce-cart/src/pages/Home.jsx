import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  useEffect(() => {
    try {
      setProductsLoading(true);
      const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=20');
        const data = await response.json();
        if (data && data.products) {
          setProducts(data.products);
        }
      }
      fetchProducts();
    } catch (error) {
      console.log(error)
    }
    finally {
      setProductsLoading(false);
    }
  }, [])

  return (
    <div className='container mx-auto w-full xl:w-2/3 mt-20 '>
      <div className="header py-2 px-5">
        <h1 className="text-2xl font-semibold text-left">Products</h1>
      </div>
      {!productsLoading ?
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4  lg:px-10 px-5 xl:px-5  py-5">
          {products && products.map((product) => (
            <Card key={product.id} product={product} />
          ))
          }
        </div> :
        <div className="w-full h-full flex justify-center mt-32 items-center">
          <p className="">Loading ...</p>
        </div>
      }
    </div>
  )
}
