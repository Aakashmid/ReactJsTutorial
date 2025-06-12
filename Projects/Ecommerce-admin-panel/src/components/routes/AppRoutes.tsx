import Overview from "@/pages/Overview"
import { HashRouter, Routes, Route } from "react-router-dom"


const AppRoutes = () => {

  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Overview />} />
        </Routes>
    </HashRouter>
  )
}

export default AppRoutes