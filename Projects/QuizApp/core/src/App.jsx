
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizSelect from './components/QuizSelect'
import RandomQuiz from './components/RandomQuiz'
function App() {

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' Component={QuizSelect} />
          <Route path='/r/:topic' Component={RandomQuiz} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
