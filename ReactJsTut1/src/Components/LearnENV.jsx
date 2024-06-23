import React from 'react'

export const LearnENV = () => {
  return (
    <>
    {/* when we are using react with vite than during creating environment variable use VITE as prefix of every env variable */}
    <h1>How to  use env in react + vite </h1>  
    <p className="">{import.meta.env.VITE_BASE_API_URL}</p>
    <br />
    <p className="">{import.meta.env.VITE_SECRET_KEY}</p>
  
    </>
  )
}
