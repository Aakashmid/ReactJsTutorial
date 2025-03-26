import { Route, Routes, HashRouter as Router } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
