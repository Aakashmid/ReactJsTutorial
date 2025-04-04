import { Route, Routes, HashRouter as Router } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"
import CartDetails from "./pages/CartDetails"

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </Router>
  )
}

export default App
