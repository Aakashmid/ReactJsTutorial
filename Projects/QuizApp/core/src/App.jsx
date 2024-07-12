
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizSelect from './components/QuizSelect'
function App() {

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' Component={QuizSelect}>

          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
