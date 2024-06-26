import React from 'react'

export const Tasks = (props) => {
  return (
    <>
      {props.items.map((value, i) => {
        return (
          <React.Fragment key={i}>
            <li className='row'>
              <p className=' p-2 m-2 shadow-lg col-sm-9'  >{value}</p>
              <button className='btn btn-danger  m-2  col-sm-2 ' onClick={() => props.deleteTask(i)}>X</button>
            </li>
          </React.Fragment>
        )
      })}
    </>
  )
}
