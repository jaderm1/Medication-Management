import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {Login}  from '../pages/login'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path='/' />


                 
            </Routes>

        </BrowserRouter>
    )
}
export { RoutesApp }