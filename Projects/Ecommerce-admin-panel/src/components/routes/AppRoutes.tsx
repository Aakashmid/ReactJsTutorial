import Orders from "@/pages/Orders"
import Overview from "@/pages/Overview"
import Products from "@/pages/Products"
import { HashRouter, Routes, Route } from "react-router-dom"


const AppRoutes = () => {

  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/orders" element={<Orders/>} />
        </Routes>
    </HashRouter>
  )
}

export default AppRoutes