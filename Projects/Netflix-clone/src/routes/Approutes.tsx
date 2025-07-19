
import Home from '@/pages/Home'
import {  Route, Routes } from 'react-router-dom'

const Approutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default Approutes