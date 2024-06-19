// memo is high order component(HOC) that memozies the rendering of functional component.Component
// It prevents a  functional component from re-rendering  if it's props haven't changed

// It's particularly useful when you have a components  that are rendering with same  props but don't need  to update when those  props change .


import { Component } from 'react'
import {memo} from 'react'

export const GenerateRandomNumber = memo(({randomNumber,generateRandomNumber}) => {
    console.log('GenrateRandomNumber component rendered !!');
  return (
    <div>
        <h1>Random Number : { randomNumber}</h1>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  )
})
