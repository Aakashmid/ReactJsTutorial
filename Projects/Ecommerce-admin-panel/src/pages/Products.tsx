import PageWrapper from '@/components/layout/PageWrapper'
import { Input } from '@/components/ui/input'
import { SearchCodeIcon, SearchIcon } from 'lucide-react'
import React from 'react'

const Products = () => {
  return (
    <PageWrapper>
      <div className='products-page-wrapper'>
        <h1 className="font-bold   text-3xl">
          Products
        </h1>
        <div className="search-filter mt-5 flex flex-col gap-4">
          <div className="relative search-input">
            <button className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2">
              <SearchIcon className="h-4 w-4" />
            </button>
            <Input placeholder='Search..' className='bg-primary focus-visible:ring-0 focus:border-none pl-10' />
          </div>
          <div className=""></div>


        </div>
      </div>
    </PageWrapper>
  )
}

export default Products