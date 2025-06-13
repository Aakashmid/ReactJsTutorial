import React from 'react'
import useFetch from '.'

const UseFetchHookTest = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );


  // console.log(error)
  // console.log(data)
  // console.log(pending)
  return (
    <div className='max-w-lg mx-auto text-center '>
      <h1 className="text-xl font-bold">Use Fetch Hook</h1>
      {pending && <p className=''>pending please wait ...</p>}
      {error ? error : null}
      {data && data.products && data.products.length &&
        data.products.map(product => <p key={product.id}>{product.title}</p>)
      }
    </div>
  )
}

export default UseFetchHookTest