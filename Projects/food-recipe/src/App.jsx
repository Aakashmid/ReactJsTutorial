
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/recipe-item/:id" element={<Details/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
