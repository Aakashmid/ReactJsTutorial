
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>
  )
}

export default App
