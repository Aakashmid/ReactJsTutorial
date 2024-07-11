
import { useState } from 'react'
import React from 'react'
import Header from './components/framework/header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Header/>
    </React.Fragment>
  )
}

export default App
