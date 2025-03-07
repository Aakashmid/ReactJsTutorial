import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating({ numOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (id) => {
    setRating(id);
  }
  const handleMouseEnter = (id) => {
    setHover(id);
  }
  const handleMouseLeave = (id) => {
    setHover(rating);
  }
  return (
    <div className='w-fit  mx-auto flex items-center gap-2'>
      {
        [...Array(numOfStars)].map((_, index) => {
          return <span className='cursor-pointer' key={index}>
            <FaStar className={`${index < (hover || rating) && 'text-yellow-300'} `}
              onClick={() => handleClick(index + 1)}
              onMouseLeave={() => handleMouseLeave(index + 1)}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              size={'4rem'} />
          </span>
        })
      }
    </div>
  )
}
