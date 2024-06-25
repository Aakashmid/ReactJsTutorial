import React from 'react'

export const Tasks = (props) => {
  return (
    <>
    {props.items.map((value,i)=>{
        return <li className='p-2 shadow-lg'>{value}</li>
    })}
    </>
  )
}
